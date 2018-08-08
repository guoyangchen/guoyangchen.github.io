import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import cookie from 'js-cookie';
import qs from 'querystring';
import { getScrollTop } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import siteConfig from '../../../site_config/site';
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
    window.addEventListener('scroll', () => {
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
    });
  }

  render() {
    const hashSearch = window.location.hash.split('?');
    const search = qs.parse(hashSearch[1] || '');
    let language = search.lang || cookie.get('docsite_language') || siteConfig.defaultLanguage;
    // 防止链接被更改导致错误的cookie存储
    if (language !== 'en-us' && language !== 'zh-cn') {
      language = siteConfig.defaultLanguage;
    }
    // 同步cookie和search上的语言版本
    if (language !== cookie.get('docsite_language')) {
      cookie.set('docsite_language', language, { expires: 365, path: '' });
    }
    if (!search.lang) {
      return <Redirect to={`${this.props.match.url}?lang=${language}`} />;
    }
    const dataSource = homeConfig[language];
    const { headerType } = this.state;
    const headerLogo = headerType === 'primary' ? './img/ai_small_white.png' : './img/ai_small_green.png';
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
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
              <img src={dataSource.brand.brandImg} />
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map(b => <Button type={b.type} link={b.link}>{b.text}</Button>)
            }
          </div>
          </div>
        </section>
        <section className="users-section">
          <h3>{dataSource.users.title}</h3>
          <div className="users">
          {
            dataSource.users.list.map((user, i) => (
              <img src={user} key={i} />
            ))
          }
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}


export default Home;
