import postsData from '../posts/mock.json';

type RawPost = (typeof postsData)['posts'][number];

function normalizePost(post: RawPost) {
    const { meta, content, slug, title } = post;

    return {
        slug,
        meta: {
            title: title || meta?.title || slug,
            date: meta?.date ?? null,
            description: meta?.description ?? ''
        },
        content: content || {}
    };
}

export function getPostSlugs() {
    return postsData.posts.map((post) => post.slug);
}

export function getPostBySlug(slug: string) {
    const post = postsData.posts.find((p) => p.slug === slug);

    if (!post) {
        return null;
    }

    return normalizePost(post);
}

export function getAllPosts() {
    return postsData.posts
        .map(normalizePost)
        .sort(
            (a, b) =>
                new Date(b.meta.date || '').getTime() -
                new Date(a.meta.date || '').getTime()
        );
}
