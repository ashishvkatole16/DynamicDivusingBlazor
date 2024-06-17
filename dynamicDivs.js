window.initializeDynamicDivs = function () {
    const textboxes = document.querySelectorAll('input[type="text"]');
    textboxes.forEach((textbox, index) => {
        textbox.addEventListener('focus', () => showDiv(index));
    });

    function showDiv(index) {
        hideAllDivs();
        let dynamicDiv = document.getElementById(`dynamic-div-${index}`);
        if (!dynamicDiv) {
            dynamicDiv = createDynamicDiv(index);
            document.body.appendChild(dynamicDiv);
        }
        dynamicDiv.style.display = 'block';
    }

    function hideAllDivs() {
        const dynamicDivs = document.querySelectorAll('.dynamic-div');
        dynamicDivs.forEach(div => {
            div.style.display = 'none';
        });
    }

    function createDynamicDiv(index) {
        const div = document.createElement('div');
        div.id = `dynamic-div-${index}`;
        div.className = 'dynamic-div';
        div.innerHTML = `This is div number ${index + 1}`;
        div.addEventListener('click', () => {
            alert(`Div ${index + 1} clicked!`);
        });
        return div;
    }
};
