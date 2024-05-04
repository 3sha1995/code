
document.querySelectorAll('.cancel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    });
});


document.querySelectorAll('.accept-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.parentNode.parentNode;
        const cancelBtn = row.querySelector('.cancel-btn');
        cancelBtn.parentNode.removeChild(cancelBtn);
    });
});
