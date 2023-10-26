import{kt as O,ku as B,kv as T,bo as w,d as X,g as K,u as Y,kw as J,b6 as Q,kx as i,r as H,C as U,ky as V,fU as Z,a as t,H as D,W as q,cP as ee,b5 as oe,o as re,aH as x,kz as ae,br as h,kA as se,ea as ie,kB as ne,bN as S,R as L}from"../index-c9399634.js";import{u as E}from"./useGroupMembers-09cbe410.js";import{P as te}from"./pending-items-row-29b68c50.js";import{S as me}from"./scrollable-list-89a686d6.js";import{P as $}from"./placeholder-account-3b6632d3.js";import"./index-77b62031.js";import"./load-more-817954f2.js";function ue(v,u){const{createEntity:s}=O([w.GROUP_MEMBERSHIPS,u.id],{post:`/api/v1/groups/${v.id}/demote`},{schema:B.array(T).transform(d=>d[0])});return s}function de(v,u){const{createEntity:s}=O([w.GROUP_MEMBERSHIPS,u.account.id],{post:`/api/v1/groups/${v.id}/promote`},{schema:B.array(T).transform(d=>d[0])});return s}var a=re({adminLimitTitle:{id:"group.member.admin.limit.title",defaultMessage:"Admin limit reached"},adminLimitSummary:{id:"group.member.admin.limit.summary",defaultMessage:"You can assign up to {count, plural, one {admin} other {admins}} for the group at this time."},blockConfirm:{id:"confirmations.block_from_group.confirm",defaultMessage:"Ban"},blockFromGroupHeading:{id:"confirmations.block_from_group.heading",defaultMessage:"Ban From Group"},blockFromGroupMessage:{id:"confirmations.block_from_group.message",defaultMessage:"Are you sure you want to ban @{name} from the group?"},blocked:{id:"group.group_mod_block.success",defaultMessage:"@{name} is banned"},demotedToUser:{id:"group.demote.user.success",defaultMessage:"@{name} is now a member"},groupModBlock:{id:"group.group_mod_block",defaultMessage:"Ban from group"},groupModDemote:{id:"group.group_mod_demote",defaultMessage:"Remove {role} role"},groupModKick:{id:"group.group_mod_kick",defaultMessage:"Kick @{name} from group"},groupModPromoteMod:{id:"group.group_mod_promote_mod",defaultMessage:"Assign {role} role"},kickConfirm:{id:"confirmations.kick_from_group.confirm",defaultMessage:"Kick"},kickFromGroupMessage:{id:"confirmations.kick_from_group.message",defaultMessage:"Are you sure you want to kick @{name} from this group?"},kicked:{id:"group.group_mod_kick.success",defaultMessage:"Kicked @{name} from group"},promoteConfirm:{id:"group.promote.admin.confirmation.title",defaultMessage:"Assign Admin Role"},promoteConfirmMessage:{id:"group.promote.admin.confirmation.message",defaultMessage:"Are you sure you want to assign the admin role to @{name}?"},promotedToAdmin:{id:"group.promote.admin.success",defaultMessage:"@{name} is now an admin"}}),ce=function(u){var s,d,_=u.canPromoteToAdmin,r=u.member,n=u.group,c=X(),A=K(),o=Y(),y=J(n,r.account),G=de(n,r),F=ue(n,r),g=Q(r.account.id),e=g.account,N=g.isLoading,R=((s=n.relationship)===null||s===void 0?void 0:s.role)===i.OWNER,P=((d=n.relationship)===null||d===void 0?void 0:d.role)===i.ADMIN,k=r.role===i.OWNER,l=r.role===i.ADMIN,b=r.role===i.USER,C=function(){c(x("CONFIRM",{message:o.formatMessage(a.kickFromGroupMessage,{name:e==null?void 0:e.username}),confirm:o.formatMessage(a.kickConfirm),onConfirm:function(){return c(ae(n.id,e==null?void 0:e.id)).then(function(){return h.success(o.formatMessage(a.kicked,{name:e==null?void 0:e.acct}))})}}))},f=function(){c(x("CONFIRM",{heading:o.formatMessage(a.blockFromGroupHeading),message:o.formatMessage(a.blockFromGroupMessage,{name:e==null?void 0:e.username}),confirm:o.formatMessage(a.blockConfirm),onConfirm:function(){y({account_ids:[r.account.id]},{onSuccess:function(){c(se([r.id],w.GROUP_MEMBERSHIPS)),h.success(o.formatMessage(a.blocked,{name:e==null?void 0:e.acct}))}})}}))},I=function(){if(!_){h.error(o.formatMessage(a.adminLimitTitle),{summary:o.formatMessage(a.adminLimitSummary,{count:W})});return}c(x("CONFIRM",{heading:o.formatMessage(a.promoteConfirm),message:o.formatMessage(a.promoteConfirmMessage,{name:e==null?void 0:e.username}),confirm:o.formatMessage(a.promoteConfirm),confirmationTheme:"primary",onConfirm:function(){G({role:i.ADMIN,account_ids:[e==null?void 0:e.id]},{onSuccess:function(){h.success(o.formatMessage(a.promotedToAdmin,{name:e==null?void 0:e.acct}))}})}}))},M=function(){F({role:i.USER,account_ids:[e==null?void 0:e.id]},{onSuccess:function(){h.success(o.formatMessage(a.demotedToUser,{name:e==null?void 0:e.acct}))}})},z=H.useMemo(function(){var p,m=[];return!n||!e||!((p=n.relationship)!==null&&p!==void 0&&p.role)||(R&&(b?m.push({text:o.formatMessage(a.groupModPromoteMod,{role:i.ADMIN}),icon:U,action:I}):l&&m.push({text:o.formatMessage(a.groupModDemote,{role:i.ADMIN,name:e.username}),icon:U,action:M,destructive:!0})),(R||P)&&(l||b)&&r.role!==n.relationship.role&&(A.groupsKick&&m.push({text:o.formatMessage(a.groupModKick,{name:e.username}),icon:V,action:C}),m.push({text:o.formatMessage(a.groupModBlock,{name:e.username}),icon:Z,action:f,destructive:!0}))),m},[n,e==null?void 0:e.id]);return N?t($,{}):t(D,{alignItems:"center",justifyContent:"between","data-testid":"group-member-list-item"},void 0,t("div",{className:"w-full"},void 0,t(oe,{account:r.account,withRelationship:!1})),t(D,{alignItems:"center",space:2},void 0,k||l?t("span",{"data-testid":"role-badge",className:q("inline-flex items-center rounded px-2 py-1 text-xs font-medium capitalize",{"bg-primary-200 text-primary-500 dark:bg-primary-800 dark:text-primary-200":k,"bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100":l})},void 0,r.role):null,t(ee,{items:z})))},W=5,be=function(u){var s=u.params.groupId,d=K(),_=ie(s),r=_.group,n=_.isFetching,c=E(s,i.OWNER),A=c.groupMembers,o=c.isFetching,y=E(s,i.ADMIN),G=y.groupMembers,F=y.isFetching,g=E(s,i.USER),e=g.groupMembers,N=g.isFetching,R=g.fetchNextPage,P=g.hasNextPage,k=ne(s),l=k.isFetching,b=k.count,C=n||o||F||N||l,f=H.useMemo(function(){return[].concat(S(A),S(G),S(e))},[A,G,e]),I=d.groupsAdminMax?f.filter(function(M){return M.role===i.ADMIN}).length<W:!0;return L.createElement(L.Fragment,null,t(me,{scrollKey:"group-members",hasMore:P,onLoadMore:R,isLoading:!r||C,showLoading:!r||l||C&&f.length===0,placeholderComponent:$,placeholderCount:3,className:"divide-y divide-solid divide-gray-200 dark:divide-gray-800",itemClassName:"py-3 last:pb-0",prepend:b>0&&t("div",{className:q("py-3",{"border-b border-gray-200 dark:border-gray-800":f.length})},void 0,t(te,{to:"/group/".concat(r==null?void 0:r.slug,"/manage/requests"),count:b}))},void 0,f.map(function(M){return t(ce,{group:r,member:M,canPromoteToAdmin:I},M.account.id)})))};export{W as MAX_ADMIN_COUNT,be as default};