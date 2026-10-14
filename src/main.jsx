import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Fix Google Translate DOM mutation conflicts with React reconciliation
if (typeof Node === 'function' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('Google Translate DOM safety: Node was already detached', child);
      }
      return child;
    }
    return originalRemoveChild.apply(this, arguments);
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('Google Translate DOM safety: Reference node parent mismatch', referenceNode);
      }
      return newNode;
    }
    return originalInsertBefore.apply(this, arguments);
  };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
