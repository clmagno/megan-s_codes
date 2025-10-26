// Helpers for demos
export function formToObject(form) {
  const fd = new FormData(form);
  const out = {};
  for (const [k, v] of fd.entries()) {
    if (k in out) out[k] = Array.isArray(out[k]) ? [...out[k], v] : [out[k], v];
    else out[k] = v;
  }
  return out;
}

export function pretty(target, data) {
  target.textContent = JSON.stringify(data, null, 2);
}

export function attachPasswordToggle(input, button) {
  button.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    button.textContent = input.type === 'password' ? 'Show' : 'Hide';
  });
}

export function attachCounter(textarea, display) {
  const update = () => display.textContent = `${textarea.value.length} / ${textarea.maxLength}`;
  textarea.addEventListener('input', update);
  update();
}