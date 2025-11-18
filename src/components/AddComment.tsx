import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles/BlogPost.module.css";
import Image from "next/image";

const INITIAL_STATE = {
  name: "",
  email: "",
  comment: "",
};

export default function AddComment() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    // Mock submit
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setForm(INITIAL_STATE);
  };

  return (
    <section className={styles.addComment}>
      <h3 className={styles.addComment__title}>Add A Comment</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_element_wrapper}>
          <div className={styles.form_inner_wrapper}>
            <div>
              <label className={styles.form__field}>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label className={styles.form__field}>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className={styles.form_inner_wrapper}>
            <label className={styles.form__field}>
              <span>Comment</span>
              <textarea
                name="comment"
                rows={5}
                required
                value={form.comment}
                placeholder="Search anything..."
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className={styles.form__rate}>
          <div className={styles.form__rate_input}>
            <p>Rate the usefulness of the article</p>
            <div className={styles.rate__icons}>
              <Image
                src="/images/icons/emoji-1.png"
                alt={`next`}
                width={40}
                height={40}
              />
              <Image
                src="/images/icons/emoji-2.png"
                alt={`next`}
                width={40}
                height={40}
              />
              <Image
                src="/images/icons/emoji-3.png"
                alt={`next`}
                width={40}
                height={40}
              />

              <button type="submit" className={styles.rate__btn}>
                <Image
                  src="/images/icons/emoji-4.png"
                  alt={`next`}
                  width={16}
                  height={16}
                />
                Good
              </button>
            </div>
          </div>

          <button type="submit" className={styles.send__btn}>
            <Image
              src="/images/icons/send.png"
              alt={`next`}
              width={16}
              height={16}
            />
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
