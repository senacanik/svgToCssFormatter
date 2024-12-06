document.getElementById('convert-btn').addEventListener('click', () => {
    const input = document.getElementById('input').value;
  
    if (!input.trim()) {alert('Lütfen bir SVG kodu girin.');return;}
    let output = input.replace(/\s+/g, ' ').trim();
    output = output.replace(/"/g, "'");
    output = output.replace(/#/g, '%23');
    document.getElementById('output').value = output;
  });
  
  document.getElementById('copy-btn').addEventListener('click', () => {
    const output = document.getElementById('output');
  
    if (!output.value.trim()) {
      alert('Kopyalanacak bir kod bulunamadı.');
      return;
    }
  
    output.select();
    document.execCommand('copy');
    alert('Kod kopyalandı!');
  });
  