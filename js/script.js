document.addEventListener('DOMContentLoaded', function() 
{
  const openDialogBtn = document.getElementById('open_donate_dialog_button');
  const closeDialogBtn = document.getElementById('close_donate_dialog_button');
  const imageDialog = document.getElementById('qrImageDialog');

  openDialogBtn.addEventListener('click', function() 
  {
      imageDialog.style.display = 'block';
  });

  closeDialogBtn.addEventListener('click', function() 
  {
      imageDialog.style.display = 'none';
  });
});
