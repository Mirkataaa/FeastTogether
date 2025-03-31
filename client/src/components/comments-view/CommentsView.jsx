export default function CommentsView({ comments = [] }) {

  return (
      <div className="details-comments p-6 m-5 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments:</h2>
          <ul className="space-y-4">
              {comments.length > 0 ? (
                  comments.map(({ _id, text, user, createdAt }) => (
                      <li 
                          key={_id} 
                          className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
                      >
                          <p className="text-gray-700">
                              <span className="font-semibold text-blue-600">{user?.username}</span>: {text}
                          </p>
                          <p className="text-sm text-gray-500">Posted on: {new Date(createdAt).toLocaleString()}</p>
                      </li>
                  ))
              ) : (
                  <p className="text-gray-500 text-center">No comments.</p>
              )}
          </ul>
      </div>
  );
};