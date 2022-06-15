import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Duarte"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis ipsum rem voluptatem nobis earum obcaecati corrupti quae voluptas? Sed voluptas "
          />
          <Post
            author="Bruno Duarte"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis ipsum rem voluptatem nobis earum obcaecati corrupti quae voluptas? Sed voluptas "
          />
        </main>
      </div>
    </div>
  );
}
