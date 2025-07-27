import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import Link from 'next/link';

const Home = () => {
  return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
        <div className="text-center mb-6">
          <Link 
            href="/pricing"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            🚀 Upgrade to Pro
          </Link>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Home;
