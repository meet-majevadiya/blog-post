import postsData from '../posts/mock.json';

export function getPostSlugs() {
    return postsData.posts.map((post) => post.slug);
}

export function getPostBySlug(slug: string) {
    const post = postsData.posts.find((p) => p.slug === slug);

    if (!post) return null;

    return {
        slug: post.slug,
        meta: {
            title: post.title || post.slug,
            date: post.date || null,
            description: post.description || ""
        },
        content: post.content || ""
    };
}

export function getAllPosts() {
    return postsData.posts
        .map((p) => ({
            slug: p.slug,
            meta: {
                title: p.title,
                date: p.date,
                description: p.description
            },
            content: p.content
        }))
        .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
}
