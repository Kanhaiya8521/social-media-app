import styles from '../styles/home.module.css';
import propType from 'prop-types'

const Home = ({ posts }) => {
  // console.log('posts', posts);
  // posts.map( (post) => (console.log('post', post.user.name)))
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt="user-pic"
              />
              <div>
                <span className={styles.postAuthor}>{post.user.name}</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/889/889140.png"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              <div className={styles.postCommentsItem}>
                <div className={styles.postCommentHeader}>
                  <span className={styles.postCommentAuthor}>Gill</span>
                  <span className={styles.postCommentTime}>a minute ago</span>
                  <span className={styles.postCommentLikes}>22</span>
                </div>

                <div className={styles.postCommentContent}>Random comment</div>
              </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

Home.prototype = {
  posts: propType.array,
}

export default Home;
