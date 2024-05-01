document.addEventListener('DOMContentLoaded', function() {
  const link = encodeURI(window.location.href);
  const msg = encodeURIComponent('Here what i share with you!');

  const fb = document.querySelector('#facebook');
  fb.href = `https://www.facebook.com/share.php?u=${link}`;

  const twitter = document.querySelector('#twitter');
  twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

  const instagram = document.querySelector('#instagram');
  instagram.href = `https://www.instagram.com/?url=${link}&text=${msg}`;

  const telegram = document.querySelector('#telegram');
  telegram.href = `https://telegram.me/share/url?url=${link}&text=${msg}`;

  const copyButton = document.querySelector('#copylink');
  copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(link).then(function() {
      alert('Ссылка скопирована в буфер обмена!');
    }, function() {
      alert('Ошибка при копировании ссылки');
    });
  });
});
