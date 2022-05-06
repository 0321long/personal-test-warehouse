/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-05 17:52:23
 * @LastEditors: long
 * @LastEditTime: 2022-05-06 09:48:39
 */

export default {
    // 按钮防暴力点击
    clickAgain: {
        mounted(el:any, bind: any) {
          // console.log(el);
          // console.log(bind);
          el.addEventListener('click', () => {
              if (!el.disabled) {
                  el.disabled = true;
                  setTimeout(() => {
                      el.disabled = false;
                  }, bind.value || 1500);
              }
          });
        }
    },
    // 文本超出显示省略号
    ellipsis: {
      mounted(el: any, bind: any){
        el.style.width = bind.arg || 100 + 'px'
        el.style.whiteSpace = 'nowrap'
        el.style.overflow = 'hidden'
        el.style.textOverflow = 'ellipsis'
      }
    }
}