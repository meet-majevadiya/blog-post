import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../styles/BlogPost.module.css";

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
                  placeholder="Jane Doe"
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
                  placeholder="jane@email.com"
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
                placeholder="Share your thoughts..."
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className={styles.form__rate}>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
