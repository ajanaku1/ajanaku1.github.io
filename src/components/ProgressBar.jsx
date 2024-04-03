import { FaHtml5, FaCss3, FaWordpress } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandGithubFilled,
  TbBrandReact,
} from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { IoIosApps } from "react-icons/io";

const ProgressBar = () => {
  return (
    <div className="my-16">
      <div className="progress-bar-label">
        <FaHtml5 className="mx-2" size={20} />
        HTML
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-11/12"></div>
      </div>
      <div className="progress-bar-label">
        <FaCss3 className="mx-2" size={20} />
        CSS
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-4/5"></div>
      </div>
      <div className="progress-bar-label">
        <TbBrandJavascript className="mx-2" size={20} />
        Javascript
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-3/4"></div>
      </div>
      <div className="progress-bar-label">
        <TbBrandGithubFilled className="mx-2" size={20} />
        Github
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-10/12"></div>
      </div>
      <div className="progress-bar-label">
        <TbBrandReact className="mx-2" size={20} />
        React
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-3/5"></div>
      </div>
      <div className="progress-bar-label">
        <FaWordpress className="mx-2" size={20} />
        Wordpress
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-4/5"></div>
      </div>
      <div className="progress-bar-label">
        <IoLogoFirebase className="mx-2" size={20} />
        Firebase
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-3/4"></div>
      </div>
      <div className="progress-bar-label">
        <IoIosApps className="mx-2" size={20} />
        Mobile App Developement
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 dark:bg-gray-700">
        <div className="bg-blue-600 dark:bg-yellow-500 h-2.5 rounded-full w-1/2"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
