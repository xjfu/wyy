import {
    useRef,
    useState,
    useCallback,
} from 'react'
import {
    Modal,
} from 'antd'

import Draggable from 'react-draggable'
import {
    WrapDragLogin,
    WrapPhone
} from './style'


export function DragLogin(props) {
    const v = props.visible
    const Btn = props.btn
    const [disabled, setdisabled] = useState(true)
    const [visible, setvisible] = useState(v)
    const [bounds, setbounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    })


    
    const onStart = useCallback(
        
        (event, uiData)=> {
            const {
                clientWidth,
                clientHeight
            } = window?.document?.documentElement;
            const targetRect = draggleRef?.current?.getBoundingClientRect();
            setbounds({
                    bounds: {
                    left: -targetRect?.left + uiData?.x,
                    right: clientWidth - (targetRect?.right - uiData?.x),
                    top: -targetRect?.top + uiData?.y,
                    bottom: clientHeight - (targetRect?.bottom - uiData?.y),
                },
            });
        },
        [setbounds]
    )
    

  
    const draggleRef = useRef();
    // const modal = Modal.info();
    // modal.update({
    //     closable: true,
    // })
    return(
        <WrapDragLogin>
            {/* <Button onClick={()=>{
                setvisible(true);
            }}>Open Draggable Modal</Button> */}
            
            <Btn onClick={()=>{
                    setvisible(true);
            }}>
            </Btn>
            <Modal centered className="headModal" bodyStyle={ 
                {
                    height: '300px',
                    width: '100%',
                }
            } footer = {
                null
            }
            mask = {
                false
            }
            maskClosable={false}
            destroyOnClose
            closeIcon={
                <div style={{
                    width: '49px',
                    position: 'absolute',
                    height: '33px',
                    color: 'rgb(255, 255, 255)',
                    top: '-5px',
                    verticalalign: 'center',
                    right: '-1px',
                }}><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </div>
            }
            title={
            <div className="headlogin" 
              style={{
                width: '100%',
                position: 'absolute',
                cursor: 'move',
                left: 0,
                height: '38px',
                top: 0, 
                backgroundColor: '#2d2d2d',
                color: '#fff',
                padding: '10px',
                Cursor: 'move',
              }}
              onMouseOver={(e) => {
                if (disabled) {
                  setdisabled(false);
                }
              }}
              onMouseOut={() => {
                setdisabled(true);
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
                    登录
               
            </div>
          }
          visible={visible}
          onOk={(e)=>{
            setvisible(false)
          }}
          onCancel={
              (e)=>{
                setvisible(false);
              }
           }
      
          modalRender={modal => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={
                  (event, uiData) => {
                    onStart(event, uiData)
                  }
                  
                }
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          <WrapPhone>
                    <div className="phone">
                        
                    </div>
                     <div className="scan">

                    </div>
               
               
          </WrapPhone>
          
        
        </Modal>
        </WrapDragLogin>
        )
    
}
