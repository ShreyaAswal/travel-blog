const blogsData = [
    {
        "id": 1,
        "city": "Paris",
        "Pname": "John Smith",
        "name": "Exploring the Eiffel Tower",
        "image": "images/eiffel-tower.jpg",
        "content": "The Eiffel Tower, an iron lattice tower located on the Champ de Mars in Paris, is one of the most iconic monuments in the world. Standing tall since 1889, it offers breathtaking views of the city and is a marvel of architectural engineering. Tourists can enjoy the beauty of Paris from different levels of the tower and even dine with a view."
    },
    {
        "id": 2,
        "city": "Paris",
        "Pname": "Adam Mills",
        "name": "A Walk through Montmartre",
        "image": "images/montmartre.jpg",
        "content": "Montmartre, known for its artistic history, quaint cafes, and the stunning Basilica of Sacré-Cœur, is a neighborhood that perfectly encapsulates the romantic charm of Paris. Visitors can enjoy street art, picturesque alleyways, and a lively atmosphere that has attracted artists and tourists alike."
    },
    {
        "id": 3,
        "city": "New York",
        "Pname": "Emily Davis",
        "name": "A Day in Central Park",
        "image": "images/central-park.jpg",
        "content": "Central Park, a sprawling urban oasis in the heart of New York City, offers something for everyone. From boating to picnics, walking trails to open-air theaters, the park is a hub for locals and tourists looking to escape the city's hustle and bustle."
    },
    {
        "id": 4,
        "city": "New York",
        "Pname": "Michael Johnson",
        "name": "Exploring Times Square",
        "image": "images/times-square.jpg",
        "content": "Times Square is the vibrant heart of New York City, known for its bright lights, massive digital billboards, and bustling crowds. Whether you're looking for Broadway shows, shopping, or simply taking in the energy of the city, Times Square is a must-visit."
    },
    {
        "id": 5,
        "city": "Tokyo",
        "Pname": "Sophia Tanaka",
        "name": "Senso-ji Temple Visit",
        "image": "images/senso-ji.jpg",
        "content": "Senso-ji, Tokyo’s oldest temple, is located in the historic Asakusa district. Known for its red gates, giant lanterns, and traditional architecture, this temple is a fascinating blend of spiritual and cultural significance, attracting visitors from all over the world."
    },
    {
        "id": 6,
        "city": "Tokyo",
        "Pname": "Adam Mills",
        "name": "A Night in Shibuya",
        "image": "images/shibuya.jpg",
        "content": "Shibuya, known for its bustling pedestrian crossings and vibrant nightlife, is a popular district in Tokyo. Visitors can explore shopping districts, enjoy late-night ramen, or experience the energy of one of Tokyo’s most famous neighborhoods."
    },
    {
        "id": 7,
        "city": "London",
        "Pname": "Rachel Green",
        "name": "The Majesty of Buckingham Palace",
        "image": "images/buckingham-palace.jpg",
        "content": "Buckingham Palace, the official residence of the British monarch, is a must-see for anyone visiting London. From the iconic Changing of the Guard ceremony to the stunning architecture, the palace embodies British heritage and grandeur."
    },
    {
        "id": 8,
        "city": "London",
        "Pname": "Liam O'Reilly",
        "name": "Exploring the British Museum",
        "image": "images/british-museum.jpg",
        "content": "The British Museum is a treasure trove of historical artifacts from around the world. Its vast collections span from ancient Egypt to modern Europe, offering an educational and fascinating experience for visitors of all ages."
    },
    {
        "id": 9,
        "city": "Rome",
        "Pname": "Olivia Rossi",
        "name": "Walking Through the Colosseum",
        "image": "images/colosseum.jpg",
        "content": "The Colosseum in Rome is one of the most iconic landmarks of the ancient world. This amphitheater, which once hosted gladiatorial contests and public spectacles, stands as a testament to Rome's rich history and architectural innovation."
    },
    {
        "id": 10,
        "city": "Rome",
        "Pname": "Luca Bianchi",
        "name": "Vatican Museums Tour",
        "image": "images/vatican.jpg",
        "content": "The Vatican Museums in Rome house some of the world’s most famous art collections, including the Sistine Chapel ceiling by Michelangelo. A visit to these museums is both a spiritual and artistic experience, with masterpieces that have inspired generations."
    },
    {
        "id": 11,
        "city": "Paris",
        "Pname": "Mia Dubois",
        "name": "Discovering the Louvre Museum",
        "image": "images/louvre.jpg",
        "content": "The Louvre, home to the Mona Lisa and thousands of other works of art, is a must-visit for art lovers. Its extensive collection spans centuries and offers a deep dive into art history from across the globe."
    },
    {
        "id": 12,
        "city": "New York",
        "Pname": "Emma Williams",
        "name": "Top of the Rock Observation Deck",
        "image": "images/top-of-the-rock.jpg",
        "content": "The Top of the Rock observation deck offers stunning views of New York City’s skyline, including Central Park and the Empire State Building. It’s a great spot for panoramic views, especially during sunset."
    },
    {
        "id": 13,
        "city": "Tokyo",
        "Pname": "Yuki Nakamura",
        "name": "Cherry Blossoms in Ueno Park",
        "image": "images/ueno-park.jpg",
        "content": "Ueno Park is one of Tokyo’s best spots for viewing cherry blossoms in the spring. With its wide paths and scenic ponds, the park is an ideal location for a peaceful afternoon walk or a picnic among the blossoms."
    },
    {
        "id": 14,
        "city": "London",
        "Pname": "George Anderson",
        "name": "The Tower of London",
        "image": "images/tower-of-london.jpg",
        "content": "The Tower of London, a historic fortress and former royal residence, is known for its fascinating history and the Crown Jewels. Visitors can explore its medieval towers and learn about its role in England’s past."
    },
    {
        "id": 15,
        "city": "Rome",
        "Pname": "Sophia Verdi",
        "name": "Trevi Fountain Tradition",
        "image": "images/trevi-fountain.jpg",
        "content": "The Trevi Fountain is one of Rome’s most famous landmarks. Legend has it that tossing a coin into the fountain ensures a return to Rome, making it a popular spot for tourists looking to make a wish."
    },
    {
        "id": 16,
        "city": "Paris",
        "Pname": "Alexander Durant",
        "name": "Notre-Dame Cathedral",
        "image": "images/notre-dame.jpg",
        "content": "The Notre-Dame Cathedral, with its stunning Gothic architecture and rich history, stands as a symbol of Parisian heritage. Despite recent challenges, it remains an architectural masterpiece and a place of inspiration for many."
    },
    {
        "id": 17,
        "city": "New York",
        "Pname": "Grace Miller",
        "name": "Brooklyn Bridge Walk",
        "image": "images/brooklyn-bridge.jpg",
        "content": "Walking across the Brooklyn Bridge provides unique views of Manhattan and the East River. It’s a popular route for both tourists and locals, especially during sunrise or sunset."
    },
    {
        "id": 18,
        "city": "Tokyo",
        "Pname": "Keiko Suzuki",
        "name": "Shopping in Akihabara",
        "image": "images/akihabara.jpg",
        "content": "Akihabara, Tokyo's electronics and anime hub, is a paradise for gadget lovers and anime fans. The district is filled with stores selling electronics, anime merchandise, and more."
    },
    {
        "id": 19,
        "city": "London",
        "Pname": "Hannah Bell",
        "name": "Piccadilly Circus Lights",
        "image": "images/piccadilly.jpg",
        "content": "Piccadilly Circus is known for its bright lights, iconic advertisements, and vibrant atmosphere. It’s a lively area for nightlife, shopping, and people-watching in London."
    },
    {
        "id": 20,
        "city": "Rome",
        "Pname": "Marco Romano",
        "name": "Exploring the Roman Forum",
        "image": "images/roman-forum.jpg",
        "content": "The Roman Forum offers a glimpse into the daily life of ancient Rome. Its ruins include temples, marketplaces, and government buildings, making it a fascinating site for history enthusiasts."
    }
];


// Function to load and display blog data for a given city
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get("city");

    if (city) {
        const blogs = blogsData.filter(blog => blog.city.toLowerCase() === city.toLowerCase());
        
        if (blogs.length > 0) {
            document.getElementById("cityName").innerText = `Blogs about ${city}`;
            const blogContainer = document.getElementById("blogContainer");

            blogs.forEach((blog, index) => {
                const blogDiv = document.createElement("div");
                
                // Alternate classes for left-right alignment
                blogDiv.className = `blog-entry ${index % 2 === 0 ? 'left' : 'right'}`;
                blogDiv.innerHTML = `
                    <img src="${blog.image}" alt="${blog.name}" class="blog-image">
                    <div class="blog-content">
                        <h2>${blog.Pname} in ${blog.city} - ${blog.name}</h2>
                        <p>${blog.content}</p>
                    </div>
                `;
                blogContainer.appendChild(blogDiv);
            });
        } else {
            document.getElementById("cityName").innerText = `No blogs found for ${city}`;
        }
    }
});

// Function to load comments from localStorage for the specified city
function loadComments(city) {
    const commentsList = JSON.parse(localStorage.getItem(`comments_${city}`)) || [];
    const commentsDiv = document.getElementById("commentsList");
    commentsDiv.innerHTML = '';  // Clear existing comments
    
    // Display each comment
    commentsList.forEach(comment => {
        const commentP = document.createElement("p");
        commentP.textContent = comment;
        commentsDiv.appendChild(commentP);
    });
}

// Function to add a new comment to localStorage and update the display
function addComment() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get("city");
    const comment = document.getElementById("commentInput").value.trim();

    if (comment && city) {
        // Retrieve the current comments from localStorage
        let commentsList = JSON.parse(localStorage.getItem(`comments_${city}`)) || [];
        commentsList.push(comment);

        // Save the updated comments list to localStorage
        localStorage.setItem(`comments_${city}`, JSON.stringify(commentsList));

        // Clear the comment input and reload comments
        document.getElementById("commentInput").value = '';
        loadComments(city);
    }
}