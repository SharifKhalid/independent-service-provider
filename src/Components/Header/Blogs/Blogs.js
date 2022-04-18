import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div>
                <h2>Authentication ও Authorization এর মধ্যে পার্থক্য</h2>
                <p>Authentication হচ্ছে user কে verify করার একাটি প্রক্রিয়া। আর Authorization হচ্ছে user কোন কোন applications, files, data ইত্যাদি access করতে পারবে, সেটা verify করার একাটি প্রক্রিয়া।
                </p>
            </div>

            <div>
                <h2>firebase ব্যবহার</h2>

                <p>আমরা firebase ব্যবহার করি কারণ Firebase Authentication আমাদের একই সাথে backend services এবং  user কে verify করতে ready-made UI libraries প্রদান করে। তাছাড়াও এটা বিভিন্ন ধরনের authentication এর সেবা দিয়ে থাকে। যেমন- passwords, phone numbers,Google, Facebook Twitter ইত্যাদি
                </p>
            </div>

            <div>
                <h2>firebase সেবা সমূহ</h2>

                <p>firebase Authentication ছাড়াও যে সেবাগুলো দিয়ে থাকে তাহলো-
                    Cloud Firestore. Build serverless, secure apps,
                    Realtime Database Build serverless apps, strong user-based security,
                    Remote Config,
                    Cloud Functions,
                    Cloud Messaging,
                    Hosting, এবং Cloud Storage </p>
            </div>
        </div>
    );
};

export default Blogs;