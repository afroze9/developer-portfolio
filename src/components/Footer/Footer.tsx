import { Icon } from '@iconify/react';
import './Footer.component.css';

type Social = {
  name: string;
  url: string;
  icon: string;
}
export interface IFooterProps {
  socials: Social[];
}

const Footer = ({ socials }: IFooterProps) => {
  const getSocialsMap = (socials: Social[]) => socials.map(social =>
    <span key={social.name} className="m-4">
      <a href={social.url} target="_blank" rel="noopener noreferrer">
        <Icon icon={social.icon} />
      </a>
    </span>)

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{socials.length !== 0 && getSocialsMap(socials)}</div>
        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy; Afroze Amjad
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;