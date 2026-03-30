// Academia da Independência – main script

// Spinner animation for "Análise de perfil" button
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
  .spinner {
    width: 20px;
    height: 20px;
    border: 2.5px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`;
document.head.appendChild(spinnerStyle);
