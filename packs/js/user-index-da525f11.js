import{d as x,u as y,q as M,r as d,Q as _,iR as C,a as s,B as I,bJ as L,X as b,o as U,iS as Q,iT as S}from"../index-1223d355.js";import{S as A}from"./scrollable-list-4bc3f78d.js";import"./index-80299d69.js";import"./load-more-a7926187.js";var i=U({heading:{id:"column.admin.users",defaultMessage:"Users"},empty:{id:"admin.user_index.empty",defaultMessage:"No users found."},searchPlaceholder:{id:"admin.user_index.search_input_placeholder",defaultMessage:"Who are you looking for?"}}),k=function(){var r=x(),t=y(),a=M(function(e){return e.admin_user_index}),n=a.isLoading,o=a.items,l=a.total,c=a.query,m=a.next,p=function(){n||r(Q())},u=d.useCallback(_(function(){r(C())},900,{leading:!0}),[]),f=function(v){r(S(v.target.value)),u()};d.useEffect(function(){u()},[]);var h=o.count()<l&&!!m,g=n&&o.isEmpty();return s(b,{label:t.formatMessage(i.heading)},void 0,s(L,{value:c,onChange:f,placeholder:t.formatMessage(i.searchPlaceholder)}),s(A,{scrollKey:"user-index",hasMore:h,isLoading:n,showLoading:g,onLoadMore:p,emptyMessage:t.formatMessage(i.empty),className:"mt-4",itemClassName:"pb-4"},void 0,o.map(function(e){return s(I,{id:e,withDate:!0},e)})))};export{k as default};
