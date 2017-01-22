import React from 'react';
import style from '../css/style.css';
import dataList from '../dataList';

class CvBox extends React.Component{
    render(){
        return (
            <div className={style.cvbox}>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

let Header = ()=>(
        <div className={style.header}>
            <span className={style.headerLeft} />
            <span className={style.headerRight} />
        </div>    
    );

let Footer = ()=>(<div className={style.footer} />);

class CvItem extends React.Component{
    render(){
        return (
            <div className={style.cvItem}>
                <div className={style.cvTitle}>
                    <div className={style.cvIcon + " " + style["cvIcon"+this.props.num]} />
                    {this.props.data.title}
                </div>
                <div className={style.cvDesc} dangerouslySetInnerHTML={{__html:this.props.data.desc}}>

                </div>
            </div>
        );
    }
}

class Main extends React.Component{
    render(){
        let itemList = [];
        dataList.forEach(function(value,index){
            itemList.push(<CvItem data={value} num={index+1} key={index} />);
        });
        return (<div className={style.main}>{itemList}</div>);
    }
}

export  default CvBox;