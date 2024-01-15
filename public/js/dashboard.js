document.getElementById('blogForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    try {
        const response = await fetch('/blogs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title,
              content,
            }),
        });

        if (response.ok) {
            // Parse the JSON response to get the newly created blog
            const newBlog = await response.json();

            // Handle success (e.g., log success message)
            console.log('Blog posted successfully!', newBlog);

            // Append the new blog to the ul element
            const ulElement = document.querySelector('.my-blogs-list');
            appendBlogToList(ulElement, newBlog);
        } else {
            // Log the error response
            console.error('Failed to post blog:', response.status, response.statusText);
        }
    } catch (error) {
        // Log fetch error
        console.error('Error during fetch:', error);
    }
});

// Function to append a blog to the ul element
function appendBlogToList(ulElement, blog) {
    const liElement = document.createElement('li');
    liElement.textContent = `${blog.title} by ${blog.author}`;

    // You can customize the content and structure based on your needs

    ulElement.appendChild(liElement);
}
