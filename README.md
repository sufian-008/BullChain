<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>🚀 BullChain – README</title>
  <style>
    :root {
      --bg: #0b0f14;
      --card: #0f1721;
      --muted: #a3b1c6;
      --text: #e8eef7;
      --accent: #6ee7b7;
      --accent-2: #60a5fa;
      --border: #1f2937;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0; font: 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      color: var(--text); background: linear-gradient(180deg, #0b0f14 0%, #0b0f14 60%, #0c121a 100%);
    }
    .container { max-width: 980px; margin: 0 auto; padding: 40px 20px 80px; }
    header { background: linear-gradient(135deg, rgba(96,165,250,.15), rgba(110,231,183,.08)); border: 1px solid var(--border); padding: 28px; border-radius: 18px; }
    h1 { margin: 0 0 8px; font-size: 2.2rem; letter-spacing: .2px; }
    .subtitle { margin: 0; color: var(--muted); }
    .badge { display: inline-block; padding: 6px 10px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); font-size: .9rem; margin-top: 12px; }
    section { margin-top: 32px; background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 24px; }
    h2 { margin-top: 0; font-size: 1.5rem; }
    h3 { font-size: 1.15rem; margin-bottom: 8px; }
    ul { margin: 8px 0 0 20px; }
    code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    pre { background: #0a1017; border: 1px solid var(--border); padding: 14px 16px; border-radius: 12px; overflow: auto; }
    .tree { white-space: pre; background: #0a1017; border: 1px solid var(--border); padding: 14px 16px; border-radius: 12px; overflow: auto; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; }
    .pill { display:inline-block; padding:6px 10px; border:1px solid var(--border); border-radius:999px; margin:6px 6px 0 0; color: var(--muted); }
    .muted { color: var(--muted); }
    .callout { border-left: 4px solid var(--accent-2); padding: 10px 14px; background: #0a111a; border-radius: 8px; }
    a { color: var(--accent-2); text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🚀 BullChain</h1>
      <p class="subtitle">BullChain is a full‑stack web application with a frontend, backend, and an admin dashboard. It is designed with modern technologies to provide secure authentication, real‑time interactions, and an easy‑to‑use interface for both users and administrators.</p>
      <span class="badge">Full‑Stack • React • Node/Express • MongoDB</span>
    </header>

    <section>
      <h2>📂 Project Structure</h2>
      <div class="tree">BullChain/
│── backend/        # Node.js + Express API (authentication, DB, JWT, etc.)
│── frontend/       # React app for users
│── dashboard/      # React admin dashboard with MUI & charts</div>
    </section>

    <section>
      <h2>⚙️ Tech Stack</h2>
      <div class="grid">
        <div>
          <h3>🔹 Frontend (User App)</h3>
          <ul>
            <li>React 19</li>
            <li>React Router DOM 7</li>
            <li>Axios</li>
            <li>React Toastify</li>
            <li>React Cookie</li>
          </ul>
        </div>
        <div>
          <h3>🔹 Backend (API)</h3>
          <ul>
            <li>Node.js + Express 5</li>
            <li>MongoDB + Mongoose</li>
            <li>JWT Authentication</li>
            <li>Passport &amp; Passport‑local‑mongoose</li>
            <li>BcryptJS (secure password hashing)</li>
            <li>CORS &amp; Cookie‑Parser</li>
          </ul>
        </div>
        <div>
          <h3>🔹 Dashboard (Admin Panel)</h3>
          <ul>
            <li>React 18 + React Router DOM 6</li>
            <li>Material UI (MUI)</li>
            <li>Chart.js + react-chartjs-2 (data visualization)</li>
            <li>Axios</li>
            <li>React Toastify</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>🚀 Features</h2>
      <div class="grid">
        <div>
          <h3>✅ Frontend</h3>
          <ul>
            <li>User‑friendly React interface</li>
            <li>Authentication (Login/Register)</li>
            <li>Cookie‑based session management</li>
            <li>Notifications with Toastify</li>
          </ul>
        </div>
        <div>
          <h3>✅ Backend</h3>
          <ul>
            <li>Secure REST API</li>
            <li>JWT authentication</li>
            <li>Password hashing with bcrypt</li>
            <li>MongoDB database integration</li>
            <li>Environment configuration with dotenv</li>
          </ul>
        </div>
        <div>
          <h3>✅ Dashboard</h3>
          <ul>
            <li>Admin login system</li>
            <li>Manage users &amp; data</li>
            <li>Interactive charts &amp; analytics</li>
            <li>Responsive Material UI components</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>🛠️ Installation &amp; Setup</h2>

      <h3>Clone the repository</h3>
      <pre><code>git clone https://github.com/your-username/bullchain.git
cd bullchain</code></pre>

      <h3>🔹 Backend Setup</h3>
      <pre><code>cd backend
npm install
npm run dev    # (if you set nodemon script)</code></pre>

      <div class="callout">
        <strong>Create a <code>.env</code> file in <code>backend/</code>:</strong>
        <pre><code>PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key</code></pre>
      </div>

      <h3>🔹 Frontend Setup</h3>
      <pre><code>cd frontend
npm install
npm start</code></pre>

      <h3>🔹 Dashboard Setup</h3>
      <pre><code>cd dashboard
npm install
npm start</code></pre>
    </section>

    <section>
      <h2>📊 Available Scripts</h2>
      <div class="grid">
        <div>
          <h3>Frontend &amp; Dashboard</h3>
          <ul>
            <li><code>npm start</code> – Runs the app in development mode</li>
            <li><code>npm run build</code> – Builds the app for production</li>
            <li><code>npm test</code> – Launches test runner</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li><code>npm start</code> – Starts the backend server</li>
            <li><code>npm run dev</code> – Starts with Nodemon (auto‑reload)</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>📸 Screenshots (Optional)</h2>
      <p class="muted">Add screenshots of your UI, dashboard, and API workflow here.</p>
    </section>

    <section>
      <h2>📌 Roadmap</h2>
      <ul>
        <li>🔒 Add role‑based authentication</li>
        <li>📊 More dashboard analytics</li>
        <li>🌐 Deploy frontend &amp; backend</li>
      </ul>
    </section>

    <footer class="muted" style="margin-top:32px; text-align:center;">
      <p>© <span id="year"></span> BullChain. All rights reserved.</p>
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
