import LinkedIn from '../../assets/icons/Linkedin';
import Github from '../../assets/icons/Github';

import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons hidden md:block">
      <a href="https://github.com/nikkipurcell" target="_blank">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/nikkipurcell/" target="_blank">
        <LinkedIn />
      </a>
    </div>
  );
};

export default SocialIcons;
