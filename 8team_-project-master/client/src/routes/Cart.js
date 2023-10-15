import React , {useEffect,useState} from 'react';
 import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';

//hook 사용
const dispatch = useDispatch(); // 생성한 action을 발생시킨다.
const navigate = useNavigate();



export default function Cart() {

    const [inCart, setInCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [allChecked, setAllChecked] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        connectionDB();
    }, []);

    const connectionDB = async () => {
        const {data} = await axios.get(`cart/api/`);
        setInCart(data.inCart);
        setTotalPrice(
            data.reduce((sum,perfume) => {
                return sum + perfume.price * perfume.quantity;
            }, 0)
        );

        setTotalQuantity(
            data.map((item) => {
                return item.quantity;
            }),
        );
        setCheckedItems(new Array(data.length).fill(true));
    };


    const allCheckedHandler = (event) => {
        const checked = event.target.checked;
        setCheckedItems(
            checkedItems.map((item, index) => {
                return checked;
            })
        );
        setAllChecked((prev) => !prev);
        checked ? setTotalPrice((prev) =>
            inCart.reduce((prev,item,index) => {
                return prev + item.price * totalQuantity[index];
            },prev),
        ) : setTotalPrice(0);
        };

        const checkedItemsHandler = (event) => {
            const checkedLength = updatedChecked.reduce((sum,currentCheck) => {
                if(currentCheck === true){
                    return sum + 1;
                }
                return sum;
            },0)
            //체크박스 전부 다 체크되어있는지 확인하여 true
            setAllChecked(checkedLength === updatedChecked.length);

        
            // 체크박스가 상태가 변화되었는지 파악하여 갱신하기
            const updatedChecked = checkedItems.map((checkItem, checkItemIndex) => 
                checkItemIndex === index? !checkItem : checkItem,
            );
            setCheckedItems(updatedChecked);

            setTotalPrice(
                updatedChecked[index] ? inCart[index].price * perfume[index] : incart[index].price * perfume[index],
            );
        };
        
        const deleteItems = () => {
            setItemList(prev => {
                return prev.filter(item => {
                    return !item.isChecked;
                });
            });
        };

    return (
            <div style=
                {{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={shoppingCart}>
                    장바구니
                </div>

                <div style={choice}>
                    <div style={{
                        width: '94%',
                        margin: '0 auto',
                    }}
                >          
                <label style={choiceRightMargin30}>
                <input
                  type="checkbox"
                  style={choiceRightMargin10}
                  checked={allChecked}
                  onChange={(event) => allCheckedHandler(event)}
                />
                <span style={{ margin: '4px' }}>
                  전체선택 ({checkedItems.filter((item) => item === true).length}/
                  {checkedItems.length})
                </span>
              </label>
              <span style={choiceRightMargin50}>|</span>
              <Button
                onClick={() => deleteItems('전체 삭제')}
                value="전체삭제"
                type="button"
              ></Button>
            </div>
        </div>

                
        <div style={items}>
            {inCart.length > 0 ?  (
                <>
                    <ul style={item}>
                            <Data 
                                inCart = {inCart}
                                setCheckedItems = {setCheckedItems}
                                checkedItems = {checkedItems}
                                checkedItemsHandler = {checkedItemsHandler}
                                setTotalQuantity = {setTotalQuantity}
                                setTotalPrice = {setTotalPrice}
                                setInCart = {setInCart}
                            />
                    </ul>

                        <div>
                            결제 예정 금액 : {totalPrice }원
                        </div>


                        <button value="결제하기"
                            type = "button"
                            onClick={() => deleteItems('결제하기')}>
                        </button>
                </>
                    ): ( "장바구니가 비었습니다.")}
        </div>
        </div>
    )
}

