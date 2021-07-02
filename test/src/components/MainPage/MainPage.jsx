import { Carousel } from 'antd';

let MainPage = (props) => {
    const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        marginTop: '200px'
      };
    return (
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>Поздравляем вы успешно Авторизованы</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Ура ура</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Переведите 0.042421 BTC на этот счет</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Или мы вас разлогиним</h3>
            </div>
        </Carousel>
    )
}

export default MainPage;