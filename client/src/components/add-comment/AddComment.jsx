export default function AddComment () {

    const onCreate = (comment) => {
        console.log(comment);
        
    }

    return (
        <article className="create-comment p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
    <label className="text-xl font-semibold text-gray-800 mb-4 block">Add new comment:</label>
    <form className="form space-y-4" action={onCreate}>
        <textarea 
            name="comment" 
            placeholder="Write your comment here..." 
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
        <input 
            className="btn submit w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" 
            type="submit" 
            value="Add Comment" 
        />
    </form>
</article>

    );
};