import { Carousel } from 'antd';

export let MainPage = () => {
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
                <h3 style={contentStyle}>Поздравляю</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Вы</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Успешно</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Авторизованы</h3>
            </div>
        </Carousel>
    )
}