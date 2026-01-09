/* ============================
   LOGIN MODAL SYSTEM (FULL) — SAME DESIGN
   Drop-in JS: import it + add id="login" to any trigger element
   ============================ */

/* Inject CSS dynamically (scoped for login) */
(function () {
  const css = `
/* === BACKDROP === */
.login-backdrop{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.55);
  backdrop-filter:blur(8px);
  display:none;
  z-index:999999;
  padding:12px;
  animation:fadeIn .25s ease-out;

  overflow:auto;
  -webkit-overflow-scrolling:touch;

  align-items:center;
  justify-content:center;
}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}

/* === MODAL === */
.login-modal{
  width:min(780px, 100%);
  background:linear-gradient(135deg,rgba(25,28,38,.95),rgba(15,20,28,.95));
  border-radius:18px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,.08);
  box-shadow:0 0 40px rgba(0,255,200,.15);
  animation:popUp .32s cubic-bezier(.23,1.1,.32,1);
  position:relative;

  max-height: calc(100dvh - 24px);
  display:flex;
  flex-direction:column;
}
@keyframes popUp{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}

/* Layout split */
.login-inner{
  display:grid;
  grid-template-columns:1fr 1fr;
  overflow:auto;
  -webkit-overflow-scrolling:touch;
}

/* === LEFT SIDE (FORM) === */
.login-left{ padding:32px; }
.login-left h2{ font-size:1.6rem; font-weight:800; margin-bottom:8px; }
.login-left p{ color:#9db0c6; margin-bottom:22px; }

.login-field{
  width:100%;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  padding:12px 14px;
  border-radius:10px;
  margin-bottom:14px;
  font-size:.95rem;
  color:#fff;
  outline:none;
}
.login-field:focus{
  border-color:rgba(0,255,200,.35);
  box-shadow:0 0 0 3px rgba(0,255,200,.10);
}
.login-field::placeholder{ color:rgba(255,255,255,.4); }

.login-submit{
  width:100%;
  background:linear-gradient(90deg,#00ffa3,#00c6ff);
  color:#000;
  padding:14px;
  border-radius:10px;
  font-weight:800;
  margin-top:6px;
  cursor:pointer;
  transition:.2s ease;
  font-size:1rem;
  border:none;
}
.login-submit:hover{
  transform:translateY(-2px);
  box-shadow:0 0 15px rgba(0,255,200,.45);
}

/* small links row */
.login-links{
  display:flex;
  justify-content:space-between;
  gap:10px;
  margin-top:12px;
  font-size:.9rem;
}
.login-link{
  color:#9db0c6;
  text-decoration:none;
  cursor:pointer;
}
.login-link:hover{ color:#cfe3ff; text-decoration:underline; }

/* === RIGHT SIDE (PROMO) === */
.login-right{
  background:linear-gradient(135deg,#0d1b2d,#00111c);
  padding:32px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
}
.login-promo-badge{
  background:#00ffd0;
  color:#000;
  padding:6px 14px;
  border-radius:50px;
  font-size:.75rem;
  font-weight:800;
  display:inline-block;
  margin:0 auto 16px auto;
}
.login-right h3{ font-size:1.4rem; font-weight:800; margin-bottom:8px; }
.login-right .highlight{
  color:#00ffa3;
  text-shadow:0 0 12px rgba(0,255,180,.8);
}

/* promo image */
.login-img{
  width:100%;
  max-width:340px;
  height:auto;
  margin:18px auto 0 auto;
  display:block;
  filter:drop-shadow(0 0 12px rgba(0,255,180,.25));
  border-radius:10px;
}

/* Close Button */
.login-close{
  position:absolute;
  top:10px; right:10px;
  width:42px; height:42px;
  display:grid; place-items:center;
  font-size:26px; font-weight:900;
  color:#fff; cursor:pointer;
  opacity:.85; transition:.2s;
  border-radius:12px;
  background:rgba(0,0,0,.20);
  backdrop-filter:blur(6px);
  user-select:none;
  z-index:5;
}
.login-close:hover{ opacity:1; }

/* ✅ MOBILE */
@media (max-width: 760px){
  .login-backdrop{
    display:none; /* JS sets flex */
    align-items:flex-start;
    justify-content:center;
    padding:10px;
  }

  .login-modal{
    width:100%;
    border-radius:16px;
    max-height: calc(100dvh - 20px);
  }

  .login-inner{
    grid-template-columns:1fr;
  }

  .login-left, .login-right{
    padding:18px;
  }

  .login-left h2{ font-size:1.35rem; }
  .login-right h3{ font-size:1.15rem; }

  .login-img{
    max-width: 320px;
    margin-top: 14px;
  }
}
`;
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
})();

/* === Create Modal HTML Automatically === */
(function () {
  const modal = document.createElement("div");
  modal.className = "login-backdrop";
  modal.id = "loginModal";

  modal.innerHTML = `
    <div class="login-modal" role="dialog" aria-modal="true" aria-label="Log in">
      <div class="login-close" id="loginClose" role="button" aria-label="Close">×</div>

      <div class="login-inner">

        <!-- LEFT FORM -->
        <div class="login-left">
          <h2>Log in</h2>
          <p>Access your dashboard and manage your staking rewards.</p>

          <input id="loginEmail" type="email" placeholder="Email" class="login-field" autocomplete="email">
          <input id="loginPassword" type="password" placeholder="Password" class="login-field" autocomplete="current-password">

          <button id="loginSubmit" class="login-submit">Log In</button>

          <div class="login-links">
            <a class="login-link" href="#signup" id="loginGoSignup">Create account</a>
            <a class="login-link" href="#" id="loginForgot">Forgot password?</a>
          </div>
        </div>

        <!-- RIGHT PROMO -->
        <div class="login-right">
          <span class="login-promo-badge">WELCOME BACK</span>
          <h3>Earn More With <span class="highlight">Staking</span></h3>
          <p style="color:#99b8d0;margin-bottom:14px;">Stake BTC, ETH, SOL & USDT — cashouts every Friday.</p>

          <img src="./stakingm.png" class="login-img" alt="Staking Promo">
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);
})();

/* ===============================
   OPEN / CLOSE HANDLERS
=============================== */
const loginModal = document.getElementById("loginModal");
const loginCloseBtn = document.getElementById("loginClose");

function openLoginModal() {
  if (!loginModal) return;
  loginModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLoginModal() {
  if (!loginModal) return;
  loginModal.style.display = "none";
  document.body.style.overflow = "";
}

/* Open modal when any element with id="login" is clicked (or children) */
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("#login");
  if (trigger) {
    e.preventDefault?.();
    openLoginModal();
  }
});

/* Close (X) */
loginCloseBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  closeLoginModal();
});

/* Close clicking outside */
loginModal?.addEventListener("click", (e) => {
  if (e.target === loginModal) closeLoginModal();
});

/* Close ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && loginModal && loginModal.style.display === "flex") {
    closeLoginModal();
  }
});

/* Optional: demo handlers (replace with your real auth) */
document.getElementById("loginSubmit")?.addEventListener("click", () => {
  const email = document.getElementById("loginEmail")?.value?.trim() || "";
  const pass  = document.getElementById("loginPassword")?.value || "";
  if (!email || !pass) return alert("Please enter email and password.");
  alert("Logged in (demo). Hook this to your backend.");
});

/* Optional: forgot password (demo) */
document.getElementById("loginForgot")?.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Password reset (demo). Hook this to your backend.");
});
