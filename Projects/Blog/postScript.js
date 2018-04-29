const focus = document.querySelector('#contentFocus');

function focusContent(newFoc) {
  console.log('Trigger before while loop');
  focus.innerHTML = '';
  console.log('trigger after innerHTML clear');
  while (newFoc.childNodes.length > 0) {
    console.log('trigger after initial while');
    focus.appendChild(newFoc.childNodes[0]);
    console.log('Done');
  }
}
