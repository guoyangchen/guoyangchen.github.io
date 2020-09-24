import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
    };
  }

  componentDidMount() {
    const adjustHeaderLogo = () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    };
    adjustHeaderLogo();
    window.addEventListener('scroll', adjustHeaderLogo);
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? getLink('/img/ai_small_white.png') : getLink('/img/ai_small_green.png');
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="animation animation1" />
          <div className="animation animation2" />
          <div className="animation animation3" />
          <div className="animation animation4" />
          <div className="animation animation5" />
          <div className="animation animation6" />
          <div className="vertical-middle">
            <div className="product-logo">
              <img src={getLink(dataSource.brand.brandImg)} />
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <p className="product-desc">{dataSource.brand.briefIntroduction2}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map((b, i) => <Button key={i} type={b.type} link={b.link} target={b.target}>{b.text}</Button>)
            }
          </div>
          </div>
        </section>
        <section className="users-section">
          <h3>{dataSource.users.title}</h3>
          <div className="users">
          {
            dataSource.users.list.map((user, i) => (
              <img src={getLink(user)} key={i} />
            ))
          }
          </div>
        </section>
        <Footer language={language} />
      </div>
    );
  }
}


document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
