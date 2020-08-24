import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import catImg from './img/catOnly.png'


const App = () => {
  let state = [
    {
      id:0,
      titleDefault: 'Сказочное заморское явство',
      titleSelectedHover: 'Котэ не одобряет?',
      productName: 'Нямушка',
      whatTaste: 'с фуа-гра',
      portionAmount: '10',
      present: 'мышь',
      weight: '0,5',
      DefaultFooter: 'Чего сидишь? Порадуй котэ,',
      SelectedFooter: 'Печень утки разварная с артишоками',
      DisabledFooter: 'Печалька, с фуа-гра закончился',
      isDisabled: false
    },
    {
      id:1,
      titleDefault: 'Сказочное заморское явство',
      titleSelectedHover: 'Котэ не одобряет?',
      productName: 'Нямушка',
      whatTaste: 'с рыбой',
      portionAmount: '40',
      presentAmount:'2',
      present: 'мыши',
      weight: '2',
      DefaultFooter: 'Чего сидишь? Порадуй котэ,',
      SelectedFooter: 'Головы щучиь с чесноком да свежайшая сёмгушка',
      DisabledFooter: 'Печалька, с рыбой закончился',
      isDisabled: false
    },
    {
      id:2,
      titleDefault: 'Сказочное заморское явство',
      titleSelectedHover: 'Котэ не одобряет?',
      productName: 'Нямушка',
      whatTaste: 'с курой',
      portionAmount: '100',
      presentAmount:'5',
      present: 'мышей',
      aboutCostumer: 'Заказчик доволен',
      weight: '5',
      DefaultFooter: 'Чего сидишь? Порадуй котэ,',
      SelectedFooter: 'Филе из цыплят с трюфелями в бульоне. ',
      DisabledFooter: 'Печалька, с курой закончился',
      isDisabled: true
    }];


  const [HoveredProduct, setHover] = useState(null);
  const [SelectedProducts, setSelectedProducts] = useState([]);

  const SelectedAllProducts = (key) => {
    let SelectedProductsCopy = SelectedProducts;
    if (SelectedProductsCopy.indexOf(key) === -1) {
      SelectedProductsCopy.push(key);
       setSelectedProducts(SelectedProductsCopy);
     
      
    }
    else {
      let id = SelectedProductsCopy.indexOf(key);
      SelectedProductsCopy.splice(id, 1);
      setSelectedProducts(SelectedProductsCopy);
    }
  }
  const ChooseProductStyle = (key) => {
    if (state[key].isDisabled === true) {
      return ('Disable');
    } else {
      if (HoveredProduct === key && SelectedProducts.indexOf(key) !== -1) {
        return ('SelectHover');
      }
      if (HoveredProduct !== key && SelectedProducts.indexOf(key) !== -1) {
        return ('Select');
      }
      if (HoveredProduct === key && SelectedProducts.indexOf(key) === -1) {
        return ('DefaultHover');
      }
      else {
        return ('Default');
      }
    }
  }


  return (
    <div className={s.container}>
      <div className={s.Info_Container}>
        <div className={s.Title_Heading_Container}>
          <div className={s.Title_Heading}>Ты сегодня покормил кота?</div>
        </div>
        <div className={s.wrapper}>
          {state.map((x, key) =>
            <div className={s.Product_Container_Wrapper}>
              <div onClick={() => SelectedAllProducts(x.id)} onMouseEnter={() => setHover(x.id)} onMouseLeave={() => setHover(null)}
                className={s.Product_Container + ' ' +
                  (ChooseProductStyle(key) === 'Disable' ? s.Disable_Border :
                    ChooseProductStyle(key) === 'SelectHover' ? s.SelectedHover_Border :
                      ChooseProductStyle(key) === 'Select' ? s.Selected_Border :
                        ChooseProductStyle(key) === 'DefaultHover' ? s.DefaultHover_Border :
                          ChooseProductStyle(key) === 'Default' ? s.Default_Border : '')}>
                <div className={s.stick + ' ' +
                  (ChooseProductStyle(key) === 'Disable' ? s.Disable :
                    ChooseProductStyle(key) === 'SelectHover' ? s.SelectedHover :
                      ChooseProductStyle(key) === 'Select' ? s.Selected :
                        ChooseProductStyle(key) === 'DefaultHover' ? s.DefaultHover :
                          ChooseProductStyle(key) === 'Default' ? s.Default : '')}></div>
                <div className={s.Content_Container}>
                  {
                    ChooseProductStyle(key) === 'SelectHover' ?
                      <div className={s.First_Title_Select_Hover}>{x.titleSelectedHover}</div> :
                      <div className={s.First_Title_Default}>{x.titleDefault}</div>
                  }
                  <h1 className={s.Heading}>{x.productName}</h1>
                  <h2 className={s.Product_Taste}>{x.whatTaste}</h2>
                  <ul>
                    <li><span className = {s.ProductsAmount}>{x.portionAmount}</span> порций</li><br/>
                <li><span className = {s.ProductsAmount}>{x.presentAmount}</span> {x.present} в подарок</li><br/>
                    <li>{x.aboutCostumer}</li>
                  </ul>
                </div>
                <div className={s.Weight_Container + ' ' +
                  (ChooseProductStyle(key) === 'Disable' ? s.Disable :
                    ChooseProductStyle(key) === 'SelectHover' ? s.SelectedHover :
                      ChooseProductStyle(key) === 'Select' ? s.Selected :
                        ChooseProductStyle(key) === 'DefaultHover' ? s.DefaultHover :
                          ChooseProductStyle(key) === 'Default' ? s.Default : '')}>
                  <article className={s.Weight_Amount}><div className = {s.weight}>{x.weight}</div>кг</article>
                </div>
                <img alt = '' src={catImg} />
              </div>
              <footer className={s.Footer_Container}>
                {ChooseProductStyle(key) === 'Disable' ? <div className={s.footer}>{x.DisabledFooter}</div> :
                 ChooseProductStyle(key) === 'SelectHover' || ChooseProductStyle(key) === 'Select' ?
                  <div className={s.SelectedFooter}>{x.SelectedFooter}</div> :
                  <div className={s.footer}>
                    <span>{x.DefaultFooter}</span>
                    <a href='#' className={s.Ref_Buy} onClick={() => SelectedAllProducts(key)} onMouseEnter={() => setHover(key)} onMouseLeave={() => setHover(null)}  >купи</a>
                  </div>
                }
              </footer>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}



export default App 