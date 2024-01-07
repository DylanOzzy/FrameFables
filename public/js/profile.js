const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#story-name').value.trim();
    const description = document.querySelector('#story-text').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/stories`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/story');
      } else {
        alert('Failed to write story');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/story/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/story');
      } else {
        alert('Failed to erase story');
      }
    }
  };
  
  document
    .querySelector('.new-story-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.story-list')
    .addEventListener('click', delButtonHandler);

  //links match