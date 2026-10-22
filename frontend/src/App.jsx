import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({ status: 'backend not reachable from this deployment' }));
  }, []);

  return (
    <main className="page">
      <header>
        <h1>interviewX</h1>
        <p className="tagline">AI-powered interview preparation</p>
      </header>

      <section className="card">
        <h2>Practice interviews that feel real</h2>
        <p>
          interviewX helps students prepare for technical and HR interviews with
          AI-generated questions, instant feedback on answers, and progress
          tracking - built with React, Node.js / Express and MongoDB Atlas.
        </p>
      </section>

      <section className="card">
        <h2>Backend health</h2>
        {health ? (
          <pre>{JSON.stringify(health, null, 2)}</pre>
        ) : (
          <p>Checking {API_URL}/health ...</p>
        )}
      </section>

      <footer>
        <p>DevOps Mid-term 2 - Containerization, Deployment &amp; Monitoring, Kubernetes</p>
        <p>24ESKCS086 - Bhavishya Saini</p>
      </footer>
    </main>
  );
}
