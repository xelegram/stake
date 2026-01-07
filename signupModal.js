/* ============================
   SIGNUP MODAL SYSTEM (FULL)
   ============================ */

/* Inject CSS dynamically */
(function () {
  const css = `
/* === BACKDROP === */
.signup-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(8px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  animation: fadeIn .25s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* === MODAL === */
.signup-modal {
  width: 90%;
  max-width: 780px;
  background: linear-gradient(135deg, rgba(25,28,38,0.95), rgba(15,20,28,0.95));
  border-radius: 18px;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 0 40px rgba(0,255,200,0.15);
  animation: popUp .32s cubic-bezier(.23,1.1,.32,1.0);
}

@keyframes popUp {
  from { transform: scale(.85); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

/* Layout split */
.signup-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media(max-width: 760px) {
  .signup-inner { grid-template-columns: 1fr; }
}

/* === LEFT SIDE (FORM) === */
.signup-left {
  padding: 32px;
}

.signup-left h2 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.signup-left p {
  color: #9db0c6;
  margin-bottom: 22px;
}

.signup-field {
  width: 100%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 14px;
  font-size: .95rem;
  color: #fff;
}

.signup-field::placeholder {
  color: rgba(255,255,255,0.4);
}

.signup-submit {
  width: 100%;
  background: linear-gradient(90deg,#00ffa3,#00c6ff);
  color: #000;
  padding: 14px;
  border-radius: 10px;
  font-weight: 800;
  margin-top: 6px;
  cursor: pointer;
  transition: .2s ease;
  font-size: 1rem;
}

.signup-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(0,255,200,0.45);
}

/* === RIGHT SIDE (PROMO) === */
.signup-right {
  background: linear-gradient(135deg,#0d1b2d,#00111c);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.signup-promo-badge {
  background: #00ffd0;
  color: #000;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: .75rem;
  font-weight: 800;
  display: inline-block;
  margin-bottom: 16px;
}

.signup-right h3 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.signup-right .highlight {
  color: #00ffa3;
  text-shadow: 0 0 12px rgba(0,255,180,0.8);
}

/* Placeholder promo image */
.signup-img {
  width: 90%;
  margin: 22px auto 0 auto;
  filter: drop-shadow(0 0 12px rgba(0,255,180,0.25));
  border-radius: 10px;
}

/* Close Button */
.signup-close {
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 26px;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
  opacity: .65;
  transition: .2s;
}
.signup-close:hover {
  opacity: 1;
}
`;

  let style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
})();

/* === Create Modal HTML Automatically === */
(function () {
  const modal = document.createElement("div");
  modal.className = "signup-backdrop";
  modal.id = "signupModal";

  modal.innerHTML = `
    <div class="signup-modal">
      <div class="signup-close" id="signupClose">×</div>

      <div class="signup-inner">

        <!-- LEFT FORM -->
        <div class="signup-left">
          <h2>Create your account</h2>
          <p>Get your <span style="color:#00ffa3;font-weight:700;">$20 Bonus</span> instantly after signing up.</p>

          <input type="email" placeholder="Email" class="signup-field">
          <input type="password" placeholder="Password" class="signup-field">
          <input type="text" placeholder="Referral Code (optional)" class="signup-field">

          <button class="signup-submit">Create Account</button>
        </div>

        <!-- RIGHT PROMO -->
        <div class="signup-right">
          <span class="signup-promo-badge">NEW USERS ONLY</span>
          <h3>Claim Your <span class="highlight">$20 Bonus</span></h3>
          <p style="color:#99b8d0;margin-bottom:20px;">Earn instantly by joining the platform.</p>

          <img src="./stakingm.png" class="signup-img" alt="Reward Promo">
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);
})();

/* ===============================
   OPEN / CLOSE HANDLERS
=============================== */

const modal = document.getElementById("signupModal");
const closeBtn = document.getElementById("signupClose");

/* Open modal when any element with id="signup" is clicked */
document.addEventListener("click", (e) => {
  if (e.target.id === "signup") {
    modal.style.display = "flex";
  }
});

/* Close modal */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Close clicking outside modal */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
