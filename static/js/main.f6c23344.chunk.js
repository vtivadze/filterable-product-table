(this["webpackJsonpfilterable-product-table"]=this["webpackJsonpfilterable-product-table"]||[]).push([[0],{14:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(3),r=n(4),o=n(6),i=n(5),s=n(1),h=n.n(s),l=n(8),d=n.n(l),u=(n(14),n(0)),j=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.category;return Object(u.jsx)("tr",{children:Object(u.jsx)("th",{colspan:"2",children:e})})}}]),n}(h.a.Component),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.product,t=e.stocked?e.name:Object(u.jsx)("span",{style:{color:"red"},children:e.name});return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t}),Object(u.jsx)("td",{children:e.price})]})}}]),n}(h.a.Component),b=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.filterText,t=this.props.inStockOnly,n=[],c=null;return this.props.products.forEach((function(a){-1!==a.name.indexOf(e)&&(t&&!a.stocked||(a.category!==c&&n.push(Object(u.jsx)(j,{category:a.category},a.category)),n.push(Object(u.jsx)(p,{product:a},a.name)),c=a.category))})),Object(u.jsxs)("table",{children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Price"})]}),Object(u.jsx)("tbody",{children:n})]})}}]),n}(h.a.Component),O=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleFilterTextChange=r.handleFilterTextChange.bind(Object(c.a)(r)),r.handleInStockChange=r.handleInStockChange.bind(Object(c.a)(r)),r}return Object(r.a)(n,[{key:"handleFilterTextChange",value:function(e){this.props.onFilterTextChange(e.target.value)}},{key:"handleInStockChange",value:function(e){this.props.onInStockChange(e.target.checked)}},{key:"render",value:function(){var e=this.props.filterText,t=this.props.inStockOnly;return Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",placeholder:"Search...",value:e,onChange:this.handleFilterTextChange}),Object(u.jsxs)("p",{children:[Object(u.jsx)("input",{type:"checkbox",checked:t,onChange:this.handleInStockChange})," ","Only show products in stock"]})]})}}]),n}(h.a.Component),x=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={filterText:"",inStockOnly:!1},r.handleFilterTextChange=r.handleFilterTextChange.bind(Object(c.a)(r)),r.handleInStockChange=r.handleInStockChange.bind(Object(c.a)(r)),r}return Object(r.a)(n,[{key:"handleFilterTextChange",value:function(e){this.setState({filterText:e})}},{key:"handleInStockChange",value:function(e){this.setState({inStockOnly:e})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onFilterTextChange:this.handleFilterTextChange,onInStockChange:this.handleInStockChange}),Object(u.jsx)(b,{products:this.props.products,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly})]})}}]),n}(h.a.Component);d.a.render(Object(u.jsx)(x,{products:[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}]}),document.getElementById("container"))}},[[9,1,2]]]);
//# sourceMappingURL=main.f6c23344.chunk.js.map