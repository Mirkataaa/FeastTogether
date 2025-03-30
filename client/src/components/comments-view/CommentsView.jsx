export default function CommentsView () {

    const comments = [
        {
          _id: "1",
          comment: "This is a great product, really enjoyed it!",
          pending: false,
          author: { email: "user1@example.com" }
        },
        {
          _id: "2",
          comment: "Not bad, but could be improved in some areas.",
          pending: true,
          author: { email: "user2@example.com" }
        },
        {
          _id: "3",
          comment: "Absolutely love it! Will definitely recommend to my friends.",
          pending: false,
          author: { email: "user3@example.com" }
        },
        {
          _id: "4",
          comment: "It didn't work as expected. Very disappointing.",
          pending: true,
          author: { email: "user4@example.com" }
        },
        {
          _id: "5",
          comment: "Amazing quality and fast delivery. Very happy with my purchase!",
          pending: false,
          author: { email: "user5@example.com" }
        }
      ];
      
    return (
        <div className="details-comments p-6 m-5 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments:</h2>
    <ul className="space-y-4">
        {comments.length > 0
            ? comments.map(({ _id, comment, pending, author }) => (
                <li 
                    key={_id} 
                    className={`p-4 border border-gray-300 rounded-lg shadow-sm ${pending ? 'bg-gray-200' : 'bg-white'} transition-colors`}
                    style={{ backgroundColor: pending ? 'lightgray' : '' }}
                >
                    <p className="text-gray-700">
                        <span className="font-semibold text-blue-600">{author.email}</span>: {comment}
                    </p>
                </li>
            ))
            : <p className="text-gray-500 text-center">No comments.</p>
        }
    </ul>
</div>

    );
};