const sanityClient = require('@sanity/client')

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config);

export default async function createComment(req, res) {
    const { _id, name, address, comment } = JSON.parse(req.body);

    try {
        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            address,
            comment
        });
    } catch (err) {
        return res.status(500).json({ message: `Couldn't submit comment`, err })
    }
    console.log("Comment Success");

    res.status(200).json({ name: "Jone" })
}