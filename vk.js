function applycss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`

/* Hide sidebar */
#side_bar {
    display: none !important;
}

/* Hide header */
#page_header_cont {
    display: none !important;
}

/* Lift up page-body a bit */
#page_body {
    margin-top: 10px !important;
}

/* Below is code from stylish theme from userstyles.org by Suvorov_m:
   (https://userstyles.org/styles/127431/newvk-dark-theme) */

body {
    background: #282B2F;
    color: #E0E0E0;
}

a {
    color: #fff;
}

*::selection {
    background: #9ECDFF;
}

*::-moz-selection {
    background: #9ECDFF;
}

#side_bar ol li .left_row {
    color: #fff;
}

.fakeinput, .fakeinput ~ .placeholder .ph_input, div[contenteditable=true], div[contenteditable=true] ~ .placeholder .ph_input, input.big_text, input.big_text ~ .placeholder .ph_input, input.dark, input.dark ~ .placeholder .ph_input, input.search, input.search ~ .placeholder .ph_input, input.text, input.text ~ .placeholder .ph_input, textarea, textarea ~ .placeholder .ph_input {
    color: #fff;
}

.im-page .im-page--mess-search {
    color: #FFF;
}

.left_count_wrap {
    background: #484B4E;
    color: #FFF;
}

.im-page .im-page--peer {
    color: #fff;
}

.vkf-new-design #vkf-url-shortener-input {
    color: #fff;
}

.post_video_title {
    color: #737578 !important;
}

.nim-dialog .nim-dialog--name .nim-dialog--name-w {
    color: #fff;
}

.nim-dialog--text-preview {
    color: #737578;
}

.page_block {
    background: #373B3E;
}

.nim-dialog.nim-dialog_unread.nim-dialog_muted .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_prep-injected.nim-dialog_muted .nim-dialog--unread {
    background: #F05C44;
}

.nim-dialog.nim-dialog_unread .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_prep-injected .nim-dialog--unread {
    background: #F05C44;
}

.nim-dialog_selected._im_dialog_selected.nim-dialog.nim-dialog_unread .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_prep-injected .nim-dialog--unread {
    background-color: #fff;
}

.im-page .im-page--center-empty {
    background: url(https://habrastorage.org/web/6f4/51e/a60/6f451ea606d24b528336b89ec8aa2b98.png) no-repeat top;
    color: #737578;
}

.video_upload_separator_text {
    background-color: #373B3E;
    color: #777;
}

.video_upload_separator_line {
    background-color: #494D50;
}

.scrollbar_inner {
    background: #7E8082;
}

.scrollbar_inner:hover {
    background: #BEBFC0;
}

.ui_search_input_block {
    background: #373B3E;
}

.im-page .im-page--dialogs-footer.ui_grey_block {
    background: #373B3E;
}

.fakeinput, div[contenteditable=true], input.big_text, input.dark, input.search, input.text, textarea {
    background: #373B3E;
}

.im-page .im-page--history-new-bar:after, .im-page .im-page--history-new-bar:before {
    background: #f66;
}

.im-page .im-page--history-new-bar {
    color: #f66;
}

.im-mess.im-mess_selected, .im-mess.im-mess_selected:hover {
    background: #494D50;
}

.im-mess.im-mess_selected:last-child:before, .im-mess.im-mess_unread:last-child:before {
    background: #494D50;
}

#side_bar ol li .left_row:hover {
    background: #3E4144;
}

.im-mess.im-mess_selected + .im-mess:before, .im-mess.im-mess_unread + .im-mess:before {
    background: #494D50;
}

.im-mess-stack .im-mess-stack--content .im-mess-stack--pname a {
    color: #7E8082;
}

.nim-dialog.nim-dialog_muted.nim-dialog_selected, .nim-dialog.nim-dialog_selected {
    background: #7293b6 !important;
}

.nim-dialog.nim-dialog_hovered, .nim-dialog:hover {
    background: #494D50;
}

.nim-dialog:hover .nim-peer.nim-peer_online .nim-peer--online {
    border-color: #494D50;
}

.nim-dialog:hover .nim-peer.online:after {
    border-color: #494D50;
}

.nim-dialog.nim-dialog_hovered .nim-dialog--photo .online.mobile:after, .nim-dialog:hover .nim-dialog--photo .online.mobile:after {
    background-color: #494D50;
}

.online.mobile:after {
    background-color: #373B3E;
}

.nim-dialog.nim-dialog_hovered, .nim-dialog.nim-dialog_hovered + .nim-dialog, .nim-dialog:hover, .nim-dialog:hover + .nim-dialog {
    border-color: #484B4E;
}

.vkf-new-design.vkf-highlight-unread-im .im-mess_unread {
    background: #494D50 !important;
}

.nim-dialog.nim-dialog_selected .nim-peer.nim-peer_online .nim-peer--online {
    border-color: #7293b6;
}

.nim-dialog.nim-dialog_selected .nim-peer.nim-peer_online .nim-peer--online .nim-dialog:hover .nim-peer.online:after {
    border-color: #7293B6;
}

.im-mess.im-mess_light {
    background: #494D50;
    border-radius: 2px;
}

.im-mess .im-mess--btn {
    color: #737578;
}

.im-page .im-page--history-new-bar {
    background: #373B3E;
}

.im-page .im-page--history-new-bar > span {
    background: #373B3E;
}

.im-fwd .im-fwd--messages {
    color: #737578;
}

.im_rc_emojibtn:hover {
    background: #494D50;
}

.ads_ad_box.redesign .ads_ad_description {
    color: #8C8F95;
}

a._im_start_new {
    color: #ccc;
}

.ads_ad_box_border {
    border-color: #484B4E;
}

.page_doc_row .page_doc_title {
    color: #C4D1DE;
}

.mention_tt_actions {
    background-color: #282B2F;
    border-top-color: #484B4E;
}

.tt_w {
    color: #C4D1DE;
}

.im-page .im-page--mess-search {
    border-top-color: #484B4E;
    border-bottom-color: #484B4E;
    background: #373B3E;
}

.im-page .im-page--mess-search:hover {
    background: #494D50;
}

.box_controls {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.wall_reasons_list {
    color: #FFF;
    padding-top: 11px;
    margin-bottom: -3px;
}

.wall_module a.page_media_link_title, .wall_module span.page_media_link_title {
    color: #C4D1DE;
}

.nim-dialog .nim-dialog--preview-attach {
    color: #C4D1DE;
}

.wall_copy_more, .wall_post_more, .wall_reply_more {
    color: #C4D1DE;
}

.wall_module .media_desc .a {
    color: #C4D1DE;
}

.wall_tt .like_tt_bottom {
    background: #282B2F;
    border-top-color: #484B4E;
}

.cal_table {
    color: #FFF;
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .6);
    background-color: #373B3E;
}

.cal_table .daysofweek {
    background-color: #282B2F;
    color: #FFF;
}

.im-search .cal_table .past_day.day, .im-search .cal_table .today.day {
    color: #989898;
}

.cal_table .day.sel, .cal_table .day.sel.hover {
    background-color: #484B4E;
    border-color: #8EA8C7;
    line-height: 28px;
}

.im-search .cal_table .day {
    color: #FFF;
}

.im_cal_clear {
    background: #282B2F;
}

.im_cal_clear_lnk {
    color: #B7B7B7;
}

.im-mess.im-mess_search:hover {
    background: #494D50;
}

.im-page .im-page--header {
    background: #373B3E;
}

.cal_table .day.hover {
    background-color: #494D50;
}

.nim-dialog.nim-dialog_typing .nim-dialog--typing {
    color: #C4D1DE;
}

.video_item .video_item_thumb_wrap {
    background-color: #373B3E;
}

.im-submit-tt .im-submit-tt--title {
    color: #FFF;
}

.im-page .im-page--header, .im-page .im-page--search-header {
    background-color: #373b3e;
    border-bottom-color: #484b4e;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .nim-dialog, .nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog {
    border-top-color: #494d50;
}

.box_body .im_stickers_store_wrap .ui_tabs {
    border-color: #484B4E;
}

.im_stickers_store_wrap .ui_tabs {
    background-color: #282B2F;
}

.im_stickers_bl_wrap {
    background-color: #373B3E;
}

.im_sticker_bl {
    background-color: #494D50;
}

.im_sticker_bl_name {
    color: #fff;
}

.ui_tab_plain {
    color: #C4D1DE;
}

.im_stickers_my_tip {
    background-color: #282B2F;
    color: #fff;
}

.im_stickers_my_row ~ .im_stickers_my_row {
    border-top-color: #484B4E;
}

.im_stickers_my_name {
    color: #FFF;
}

.im-chat-placeholder {
    background-color: #484B4E;
}

.im-dropbox {
    background: #373B3E;
    color: #7E8082;
}

.im-dropbox .im-dropbox--inner {
    border-color: #7E8082;
}

.media_preview_has_medias {
    border-bottom-color: #484B4E;
}

.im-dropbox.dropbox_over .im-dropbox--inner {
    background-color: #494D50;
}

.im_stickers_my_row.sort_taken, .im_stickers_my_row.sort_taken:last-child {
    border-top-color: #494D50;
    background-color: #494D50;
}

.im_stickers_buy_header {
    background-color: #282B2F;
    border-bottom-color: #484B4E;
}

.im_stickerpack_name {
    color: #FFF;
}

.im_stickers_store_wrap .flat_button.secondary, .im_stickers_store_wrap .flat_button.secondary:active, .im_stickers_store_wrap .flat_button.secondary:hover {
    background-color: #646A6F;
    color: #BBC8D2;
}

.dropbox {
    background-color: #373B3E;
}

#photos_choose_upl {
    background-color: #282B2F;
}

.box_body {
    background-color: #373B3E;
}

.web_cam_photo {
    background-color: #373B3E;
}

.photo_upload_separator {
    background-color: #373B3E;
}

.photos_choose_upload_area_enter .photos_choose_upload_area {
    background-color: #282B2F;
}

.im-create {
    background: #373B3E;
}

.ui_tabs {
    border-bottom-color: #484B4E;
}

.im-create .im-create--tabs {
    background: #373B3E;
}

.ui_grey_block {
    background: #373B3E;
    border-top-color: #484B4E;
}

.ui_search {
    border-bottom-color: #484B4E;
}

input.ui_search_field {
    color: #fff;
}

.im-page-btn {
    color: #fff;
}

.ui_multiselect_cnt .token .token_title, .ui_search_filters_pane .token .token_title {
    color: #fff;
}

.ui_multiselect_cnt .token, .ui_search_filters_pane .token {
    background-color: #494D50;
}

.im-mess.im-mess_unread {
    background: #494D50;
}

.nim-dialog.nim-dialog_simple.nim-dialog_hovered, .nim-dialog.nim-dialog_simple:hover {
    background: #494D50;
}

.ms_items_more {
    background: #373B3E;
    border-color: #484B4E;
}

.ms_items_more_wrap.to_up .ms_items_more:before {
    border-top-color: #484B4E;
}

.ms_items_more_wrap.to_up .ms_items_more:after {
    border-top-color: #373B3E;
}

.media_selector .ms_items_more .ms_item:hover {
    background-color: #494D50;
}

.page_block {
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

#side_bar .more_div {
    border-top-color: #484B4E;
}

.leave_redesign {
    border-top-color: #484B4E;
}

.im-page .im-page--header {
    border-bottom-color: #484B4E;
}

.nim-dialog .nim-dialog--content {
    border-top-color: #484B4E;
}

.im-chat-input .im-chat-input--text {
    border-bottom-color: #484B4E;
}

.im-chat-input .im-chat-input--text:focus {
    border-bottom-color: #7E8388;
}

.im-page .im-page--dialogs-footer {
    border-top-color: #484B4E;
}

.im-chat-input {
    border-top-color: #484B4E;
}

.im-page .im-page--header-chat {
    border-bottom-color: #484B4E;
}

.im_fwd_log_wrap, .im_wall_log_wrap {
    border-left-color: #484B4E;
}

.wall_module .copy_quote {
    border-left-color: #484B4E;
}

.nim-dialog .nim-dialog--photo {
    border-color: #373B3E;
}

.nim-peer.nim-peer_online .nim-peer--online {
    border-color: #373B3E;
}

input.text.ts_input:focus {
    background-color: #254469;
    color: #FFF;
}

.ts_cont_wrap {
    background: #373B3E;
    border-color: #484B4E;
}

.ts_contact_photo.online.mobile:after {
    background-color: #373B3E;
}

.ts_contact_photo.online:after {
    border-color: #373B3E;
}

a.ts_contact.active, a.ts_search_link.active {
    background: #494D50;
}

.ts_contact.active .ts_contact_photo.online:after {
    border-color: #494D50;
}

.ts_contact.active .ts_contact_photo.online.mobile:after {
    background-color: #494D50;
}

.ts_contact_name {
    color: #FFFFFF;
}

.ts_cont_wrap {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.47);
}

.ts_search_sep {
    border-top-color: #484B4E;
}

em.ts_clist_hl {
    background: #494D50;
}

.pv_liked .pv_like_count {
    color: #fff;
}

.pv_like._like_wrap.pv_liked > span.pv_like_link._link {
    color: #fff;
}

.pv_like_count {
    color: #C4D1DE;
}

.wall_module .my_like .post_like_count, .wall_module .my_share .post_share_count {
    color: #fff;
}

.groups_blocked img {
    border-radius: 3px;
    -webkit-filter: grayscale(1) opacity(0.7);
    filter: grayscale(1) opacity(0.7);
}

.tt_default, .tt_default_right {
    border-color: #484B4E;
    background: #373B3E;
}

.ui_actions_menu_item {
    color: #fff;
}

.tt_default.tt_down::before {
    border-top-color: #484B4E;
}

.tt_default.tt_down::after {
    border-top-color: #373B3E;
}

.ui_actions_menu_item:hover {
    background-color: #494D50;
}

.ui_tabs.ui_tabs_box {
    border-color: #484B4E;
    background-color: #282B2F;
}

.ui_tab_sel, .ui_tabs .ui_tab_sel, .ui_tabs_box .ui_tab_sel {
    color: #FFF;
}

.tt_default.tt_up:before {
    border-bottom-color: #484B4E;
}

.tt_default.tt_up:after {
    border-bottom-color: #373B3E;
}

.emoji_sprite {
    background-image: url(https://habrastorage.org/web/2fb/fc1/c58/2fbfc1c586b54b4f81165d57b27df4f1.png);
    background-repeat: no-repeat;
}

.emoji_tabs {
    background: #282B2F;
}

.emoji_tabs_l_s, .emoji_tabs_r_s {
    background: #282B2F;
}

.emoji_tab_sel, .emoji_tab_sel:hover {
    background: #373B3E;
}

.emoji_bg {
    background: #494D50;
}

.emoji_tt_wrap {
    background-color: #373B3E;
    border-color: #484B4E;
}

.emoji_tab:hover {
    background: #494D50;
}

.emoji_tabs_l_s:hover, .emoji_tabs_r_s:hover {
    background: #494D50;
}

.emoji_tt_wrap.tt_down:after {
    border-top-color: #282B2F;
}

.emoji_tt_wrap.tt_down:before {
    border-top-color: #484B4E;
}

.emoji_shop:hover {
    background: #494D50;
}

.emoji_shop_icon_badge {
    border-color: #282B2F;
}

.emoji_shop:hover .emoji_shop_icon_badge {
    border-color: #494D50;
}

.sticker_hints_tt {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .6);
    background-color: #373b3e;
    border-color: #484b4e;
}

.sticker_hints_arrow {
    background-color: #373b3e;
    border-left-color: #484b4e;
}

.sticker_hints_arrow:hover {
    background-color: #494d50;
}

.ui_actions_menu {
    background: #373B3E;
    border-color: #484B4E;
}

.ui_actions_menu_sep {
    border-top-color: #484B4E;
}

.ui_actions_menu:before {
    border-bottom-color: #484B4E;
}

.ui_actions_menu:after {
    border-bottom-color: #373B3E;
}

#top_profile_menu:before {
    border-bottom-color: #484B4E;
}

#top_profile_menu:after {
    border-bottom-color: #373B3E;
}

.emoji_tt_wrap.emoji_no_tabs.tt_down:after {
    border-top-color: #373B3E;
}

.emoji_sticker_item:hover {
    background: #494D50;
}

.mott_header a, .verified_tt_header a {
    color: #FFF;
}

.tt_default.verified_tt.tt_up:before {
    border-bottom-color: #484B4E;
}

.tt_default.verified_tt.tt_up:after {
    border-bottom-color: #373B3E;
}

#top_notify_wrap {
    background: #373B3E;
    border-color: #484B4E;
}

.top_notify_show_all {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.feed_row + .feed_row_fb_hidden .feedback_row:first-child, .feed_row ~ .feed_row .feedback_row, .feed_row ~ .feed_row .feedback_sticky_row, .feedback_sticky_rows:not(:empty) + .feed_row .feedback_row {
    border-top-color: #484B4E;
}

.top_notify_header {
    background-color: #373B3E;
    color: #C4D1DE;
    border-bottom-color: #484B4E;
}

.feedback_header .author, .feedback_header .group_link, .feedback_header .mem_link {
    color: #fff;
}

.feedback_photo_icon {
    background-color: #373B3E;
    border-color: #373B3E;
}

#top_notify_wrap {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

#top_notify_wrap:before {
    border-bottom-color: #484B4E;
}

#top_notify_wrap:after {
    border-bottom-color: #373B3E;
}

.top_notify_show_all:hover {
    background-color: #494D50;
}

.top_notify_cont .feedback_row:hover {
    background-color: #494D50;
}

.feedback_row_wrap.unread {
    background-color: #373B3E;
}

.feedback_row_wrap.unread .feedback_photo_icon {
    background-color: #373B3E;
    border-color: #373B3E;
}

.feedback_row_clickable:not(.feedback_row_touched):hover {
    background-color: #494D50;
}

.top_notify_cont .feedback_row:hover .feedback_photo_icon {
    border-color: #494D50;
}

.feedback_sticky_row.unread {
    background-color: #494D50;
}

.feedback_sticky_row.unread {
    background-color: #494D50;
}

.feedback_sticky_row.unread {
    background-color: #494D50;
}

.feedback_sticky_actions .feedback_sticky_menu .ui_actions_menu:before, .ui_actions_menu_dummy_wrap.feedback_sticky_menu .ui_actions_menu:before {
    border-bottom-color: #484B4E;
}

.feedback_sticky_actions .feedback_sticky_menu .ui_actions_menu:after, .ui_actions_menu_dummy_wrap.feedback_sticky_menu .ui_actions_menu:after {
    border-bottom-color: #373B3E;
}

.top_notify_cont {
    color: #FFF;
}

.feedback_sticky_text .group_link, .feedback_sticky_text .mem_link {
    color: #C4D1DE;
}

.feedback_sticky_row.hover, .feedback_sticky_row:hover {
    background-color: #494D50;
}

.feed_row ~ .feed_row .feedback_row_clickable:not(.feedback_row_touched):hover {
    border-top-color: #484B4E;
}

.feedback_row_clickable:not(.feedback_row_touched):hover {
    border-bottom-color: #484B4E;
}

#all_shown {
    border-top-color: #484B4E;
}

.feed_article_title {
    color: #C4D1DE;
}

.wall_module td.page_media_link_thumb {
    box-shadow: 0 0 0 1px rgb(94, 97, 100) inset;
}

.top_notify_cont .feedback_header {
    color: #808080;
}

.mention_tt_online {
    color: #BBE6AC;
}

.mention_tt.mention_has_actions.tt_default.tt_down:after {
    border-top-color: #282B2F;
}

.wl_replies_header_progress {
    background-color: #373B3E;
    border-color: #484B4E;
}

.feedback_row_answer {
    background-color: #494D50;
    border-color: #5E6265;
}

.feedback_row_answer:before {
    border-bottom-color: #5E6265;
}

.feedback_row_answer:after {
    border-bottom-color: #494D50;
}

.feedback_row_wrap.reply_box_open {
    background-color: #494D50;
    border-bottom-color: #484B4E;
}

.feed_row ~ .feed_row .feedback_row_wrap.reply_box_open {
    border-top-color: #494D50;
}

.feedback_row_wrap.reply_box_open .reply_box:before {
    border-bottom-color: #484B4E;
}

.feedback_row_wrap.reply_box_open .reply_box:after {
    border-bottom-color: #373B3E;
}

.feedback_row_wrap.reply_box_open .submit_post, .feedback_row_wrap.reply_box_open:hover {
    background-color: #494D50;
}

.tt_w.top_notify_tt {
    background-color: #373b3e;
    border-color: #484b4e;
}

.tt_w.top_notify_tt.tt_up:before {
    border-bottom-color: #484b4e;
}

.tt_w.top_notify_tt.tt_up:after {
    border-bottom-color: #373b3e;
}

.notify_tt_text .group_link, .notify_tt_text .mem_link {
    color: #fff;
}

.page_block #all_shown {
    border-top-color: #484b4e;
}

.feedback_unread_bar {
    border-top-color: #484b4e;
    border-bottom-color: #484b4e;
    background-color: #373b3e;
    color: #fff;
}

.feedback_row_wrap.unread:not(.feedback_row_touched) {
    background-color: #494d50;
}

.top_notify_cont .feedback_row:not(.dld):hover {
    background-color: #494d50;
}

.top_notify_cont .feedback_row:not(.dld):hover .feedback_photo_icon {
    border-color: #494d50;
}

.top_notify_cont .feedback_row_menu .ui_actions_menu:before, .ui_actions_menu_dummy_wrap.feedback_row_menu .ui_actions_menu:before {
    border-bottom-color: #494d50;
}

.top_notify_cont .feedback_row_menu .ui_actions_menu:after, .ui_actions_menu_dummy_wrap.feedback_row_menu .ui_actions_menu:after {
    border-bottom-color: #373b3e;
}

#top_profile_menu {
    background: #373B3E;
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.top_profile_mrow {
    color: #fff;
}

.top_profile_sep {
    border-top-color: #484B4E;
}

.top_profile_mrow:hover {
    background-color: #494D50;
}

.audio_page_player {
    background-color: #373B3E;
    border-bottom-color: #484B4E;
}

.audio_layout {
    color: #fff;
}

.eltt {
    background-color: #373B3E;
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.audio_layer_bottom {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.audio_page_player .audio_page_player_title {
    color: #FFF;
}

.audio_friends_list {
    background-color: #373B3E;
}

.eltt.eltt_up:after {
    border-bottom-color: #373B3E;
}

.eltt.eltt_up:before {
    border-bottom-color: #484B4E;
}

.audio_page_player .audio_page_player_duration {
    color: #7E8082;
}

.top_audio_layer .audio_layer_rows_cont {
    border-right-color: #484B4E;
}

.ui_rmenu_item, .ui_rmenu_subitem {
    color: #E0E0E0;
}

.ui_rmenu_item:hover, .ui_rmenu_subitem:hover, .ui_rmenu_item_sel, .ui_rmenu_item_sel:hover {
    background-color: #494D50;
}

.ui_rmenu_item_sel, .ui_rmenu_item_sel:hover {
    color: #FFF;
}

.audio_row.lyrics .audio_title_inner {
    color: #C0DBF7;
}

.ui_suggester_results_list {
    background-color: #373B3E;
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.ui_suggester_results_list ul li {
    color: #FFF;
}

.audio_search_focused .audio_performer > em, .audio_search_focused .audio_title > em {
    background-color: #6E7275;
}

.ui_suggester_results_list ul li.active, .ui_suggester_results_list ul li:hover {
    background: #494D50;
    color: #FFF;
}

.ui_search_fltr {
    background: #373B3E;
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .6);
    color: #fff;
}

.ui_search_fltr_label {
    color: #FFF;
}

.flat_button.ui_load_more_btn {
    color: #FFF;
    background-color: #494D50;
    border-top-color: #484B4E;
}

.ui_search_filters_pane {
    border-top-color: #484B4E;
    background-color: #373B3E;
}

.selector_container {
    background: #494D50;
}

.selector_container td.selector input.focused, .selector_container td.selector input.selected {
    color: #FFF;
}

.selector_container table.selector_table {
    border-color: #484B4E;
    background-color: #373B3E;
}

.selector_focused table.selector_table {
    border-color: #484B4E;
    background-color: #373B3E;
}

.ui_search_fltr:after {
    border-bottom-color: #373B3E;
}

.ui_search_fltr:before {
    border-bottom-color: #484B4E;
}

.friends_possible_block.button_gray button, .flat_button.secondary {
    background-color: #494d50;
    color: #FFF;
}

.button_gray button.hover, .button_gray button:hover, .flat_button.secondary.hover, .flat_button.secondary:hover {
    background-color: #60758A;
}

#audio_status_tt .audio_share_cont {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.box_title_wrap.box_grey {
    background-color: #6287AE;
    color: #FFF;
    border-bottom-color: #484B4E;
}

.box_title_wrap.box_grey .box_title {
    color: #FFF;
}

.box_body {
    background-color: #373B3E;
}

.subheader {
    color: #AFAFAF;
}

.ui_tabs_header {
    background-color: #373B3E;
}

#audio_new_cont ul.listing li span {
    color: #FFF;
}

.tabbed_box .summary_tab .summary_tab3, .tabbed_box .summary_tab_sel .summary_tab3, .tabbed_box .summary_tab_sel a, .tabbed_box .summary_tab a {
    color: #65686c;
}

.tabbed_box .summary_tab .summary_tab3, .tabbed_box .summary_tab_sel .summary_tab3, .tabbed_box .summary_tab_sel a, .tabbed_box .summary_tab a {
    color: #FFFFFF;
}

.tabbed_box .summary_tabs {
    border-bottom-color: #484B4E;
}

.olist_item_wrap {
    border-bottom-color: #484B4E;
}

.olist.audio_album .olist_item_performer {
    color: #FFF;
}

.olist.audio_album .olist_item_title {
    color: #BBB;
}

.box_controls .flat_button.secondary, .flat_button.secondary.button_light {
    color: #bbb;
}

.olist_item_wrap em {
    background: #47698F;
}

.olist_checkbox {
    background: url(https://habrastorage.org/web/96b/5cd/b38/96b5cdb382764f17b7671ea230825248.png) no-repeat 0 -26px;
}

.olist_item_wrap:hover {
    border-top-color: #373B3E;
    background-color: #494D50;
}

.tabbed_box .summary_tab .summary_tab3:hover, .tabbed_box .summary_tab_sel .summary_tab3:hover, .tabbed_box .summary_tab_sel a:hover, .tabbed_box .summary_tab a:hover {
    background-color: #373B3E;
}

.olist_botsh .box_controls {
    border-top-color: #484B4E;
}

#album_name_wrap {
    background-color: #282B2F;
    border-bottom: 1px solid #484B4E;
    padding: 20px 0;
    text-align: center;
}

.tabbed_box .summary_tab_sel .summary_tab2 {
    background-color: #373B3E;
}

.box_controls .flat_button.secondary:hover, .flat_button.secondary.button_light:hover {
    background-color: #494D50;
}

.ui_search.ui_search_fixed {
    border-color: #484B4E;
    box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.6);
}

.ui_search_custom_link {
    color: #c4d1de;
}

.search_sep {
    border-top-color: #484B4E;
}

.friends_import_header {
    color: #FFF;
}

.invite_box_text {
    border-bottom-color: #484B4E;
    color: #FFF;
}

.invite_box .label {
    color: #FFF;
}

.ui_ownblock_label {
    color: #FFF;
}

div.box_body.box_no_buttons {
    background-color: #373B3E !important;
}

.audio_edit_label {
    color: #FFF;
}

.audio_edit_input.chk {
    color: #FFF;
}

.audio_page_player .audio_page_player_next .icon, .audio_page_player .audio_page_player_prev .icon {
    -webkit-filter: brightness(1.5) grayscale(0.2);
    filter: brightness(1.5) grayscale(0.2);
}

.audio_page_player .audio_page_player_btns .icon {
    -webkit-filter: brightness(1.5) grayscale(0.2);
    filter: brightness(1.5) grayscale(0.2);
}

.audio_hq_label {
    -webkit-filter: brightness(1.5) grayscale(0.2);
    filter: brightness(1.5) grayscale(0.2);
}

.eltt.eltt_bottom:after {
    border-bottom-color: #373B3E;
}

.chat_onl_inner {
    background-color: #373B3E;
}

.chat_tab_wrap:hover {
    background-color: #494D50;
}

.chat_tab_imgcont.online:after {
    border-color: #373B3E;
}

.chat_tab_wrap:hover .chat_tab_imgcont.online:after {
    border-color: #494D50;
}

.chat_tab_imgcont.online.mobile:after {
    background-color: #373B3E;
}

.chat_tab_wrap:hover .chat_tab_imgcont.online.mobile:after {
    background-color: #494D50;
}

.fc_tab {
    border-color: #484B4E;
    background-color: #373B3E;
}

.fc_msgs {
    background-color: #494D50;
    border-color: #282B2F;
}

.fc_msgs_out .fc_msgs {
    background-color: rgb(83, 116, 150);
    border-color: #B3B3B3;
}

div.fc_tab_txt {
    background: #373B3E;
    border-top-color: #484B4E;
}

.fc_tab_pointer:before {
    border-left-color: #484B4E;
}

.fc_tab_pointer.fc_tab_pointer_peer:after {
    border-left-color: #373B3E;
}

#fc_contacts, .fc_content {
    background: #373B3E;
}

div.fc_clist_filter_wrap {
    border-top-color: #484B4E;
    background: #373B3E;
}

#fc_ctabs_cont {
    border-color: #484B4E;
}

em.fc_clist_hl {
    background: #47698F;
}

.fc_contact_name {
    color: #FFF;
}

.chat_cont_sh_bottom, .chat_cont_sh_top {
    background: -o-linear-gradient(270deg, rgba(216, 223, 230, 0), #373B3E 80%);
    background: linear-gradient(180deg, rgba(216, 223, 230, 0), #373B3E 80%);
}

span.fc_contact_photo.online:after {
    border-color: #373B3E;
}

span.fc_contact_photo.online.mobile:after {
    background-color: #373B3E;
}

a.fc_contact_over {
    background-color: #494D50;
}

a.fc_contact_over span.fc_contact_photo.online:after {
    border-color: #494D50;
}

a.fc_contact_over span.fc_contact_photo.online.mobile:after {
    background-color: #494D50;
}

.fc_tab_pointer:after {
    border-left-color: #373B3E;
}

.fc_msgs_unread {
    background-color: #494D50;
}

.fc_tab_notify {
    background-color: #494D50;
    border-bottom-color: #494D50;
}

.fc_tab_wrap {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);
}

.submit_post {
    background: #373B3E;
    border-top-color: #484B4E;
}

.olist_item_name {
    color: #FFF;
}

.ui_actions_menu_item:hover {
    background-color: #494D50;
}

.feed_new_posts {
    color: #C4D1DE;
    border-bottom-color: #484B4E;
}

.feed_new_posts:hover {
    background: #494D50;
}

.post_author .author, .wall_module .author, .wall_module .copy_author {
    color: #C4D1DE;
}

.post_full_like_wrap {
    border-top-color: #484B4E;
}

.wall_module .replies_list {
    border-top-color: #484B4E;
}

.wall_module .reply_box, .wall_module .reply_fakebox_wrap {
    border-top-color: #484B4E;
}

.replies_open, .wr_header {
    color: #C4D1DE;
    background: #494D50;
}

a.wall_reply_greeting {
    color: #C4D1DE;
}

.post_like, .post_share {
    color: #C4D1DE;
}

.wall_module .post_like:hover, .wall_module .post_share:hover {
    background-color: #494D50;
}

.wall_module .reply_fakebox {
    background: #373B3E;
}

.wall_module .post_like_count, .wall_module .post_share_count {
    color: #fff;
}

.wall_module .reply ~ .reply .dld, .wall_module .reply ~ .reply .reply_wrap {
    border-top-color: #484B4E;
}

.wall_module .like_count {
    color: #fff;
}

.wall_module .my_like .like_count, .wall_module .my_share .share_count {
    color: #C4D1DE;
}

.wall_module .media_desc .lnk .lnk_mail_description {
    color: #C4D1DE;
}

.wall_module .media_desc .lnk.lnk_mail {
    border-left-color: #484B4E;
}

.wall_module .media_desc .lnk .lnk_mail_title {
    color: #A3D1FF;
}

.flat_button.secondary_dark:hover {
    background-color: #60758A;
}

.flat_button.secondary_dark {
    background-color: #494D50;
    color: #fff;
}

.wall_module .page_media_thumbed_link {
    background-color: #494D50;
    border-color: #484B4E;
}

.wall_module a.page_media_thumbed_link {
    cursor: pointer;
    color: #C4D1DE;
}

.wall_module div.page_media_link_desc {
    color: #FFF;
}

.ui_actions_menu_sublist .ui_actions_menu_item.checked:hover {
    background-color: #494D50;
}

.feed_lists_icon .ui_actions_menu:before {
    border-bottom-color: #484B4E;
}

.feed_lists_icon .ui_actions_menu:after {
    border-bottom-color: #373B3E;
}

.olist_topsh .olist_filter_wrap {
    border-color: #484B4E;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);
}

.ui_tabs_box .ui_tab_sel .ui_tab_count {
    color: #C4D1DE;
}

.feed_list_name_wrap {
    border-bottom-color: #484B4E;
}

.feed_list_name_label {
    color: #FFF;
}

.replies_side {
    border-color: #C4D1DE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .6);
    background: #494D50 url(https://habrastorage.org/web/a43/ece/4d6/a43ece4d67c341a895458b083c7e6295.png) no-repeat 50% 50%;
}

.replies_side:hover {
    background-color: #656565;
}

.search_filters_minimized_text {
    background-color: #373B3E;
}

.search_filter_main, .search_filter_open, .search_filter_shut {
    color: #FFF;
}

.info_msg {
    background-color: #494D50;
    border-color: #737373;
}

.right_list_header {
    color: #FFF;
}

.ui_rmenu_subitem.ui_rmenu_item_sel, .ui_rmenu_subitem.ui_rmenu_item_sel:hover {
    color: #C4D1DE;
}

.online:after {
    border-color: #373B3E;
}

.photos_container .photos_row {
    border-color: #373B3E;
}

.places_summary {
    color: #FFF;
}

.pv_comments_header {
    background: #494D50;
    color: #C4D1DE;
}

.pv_comments_header:hover {
    background: #60758A;
}

.replies_open:hover, .wr_header:hover {
    background-color: #60758A;
}

.mv_controls {
    background: #373B3E;
}

.mv_title {
    color: #FFF;
}

.idd_popup {
    border: 1px solid #484B4E;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, .6);
}

.idd_popup .idd_header_wrap {
    background-color: #282B2F;
}

.idd_popup .idd_header {
    color: #C4D1DE;
}

.idd_popup .idd_items_content {
    background-color: #373B3E;
}

.idd_popup .idd_item {
    color: #fff;
}

.idd_popup .idd_item:active {
    background-color: #81888E !important;
}

.idd_popup .idd_item.idd_hover, .idd_popup .idd_item.idd_hover_sublist_parent {
    background-color: #494D50;
}

.box_controls .flat_button.secondary, .flat_button.secondary.button_light {
    color: #D2D2D2;
}

.mv_actions_panel {
    border-bottom-color: #484B4E;
}

.mv_wide_column {
    border-right-color: #484B4E;
}

.mv_narrow_column {
    border-left-color: #484B4E;
}

#mv_pl_tt .mv_tt_add_playlist {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

#mv_pl_tt .mv_tt_add_playlist:hover {
    background-color: #494D50;
}

#mv_pl_tt .mv_tt_playlist {
    color: #FFF;
}

.privacy_dropdown {
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .6);
}

.privacy_dropdown .header {
    border-color: #484B4E;
    color: #DCE1E6;
    background-color: #282B2F;
}

.privacy_dropdown .body {
    background: #373B3E;
}

.privacy_dropdown .item, .privacy_dropdown .item_sel, .privacy_dropdown .item_sel_plus {
    color: #FFF;
}

.privacy_dropdown .item_sel, .privacy_dropdown .item_sel_plus {
    background-color: #494D50;
}

.privacy_dropdown .l_header .l_header_label {
    background-color: #282B2F;
    color: #CECECE;
}

.privacy_dropdown .l_header {
    background-color: #282B2F;
}

.privacy_dropdown .l_item, .privacy_dropdown .l_item_sel {
    background: #373B3E;
    color: #FFF;
}

.flist_sel {
    background-color: #373B3E;
    border-bottom-color: #484B4E;
}

.flist_summary {
    color: #bbb;
}

.flist_item_wrap {
    border-bottom-color: #484B4E;
}

.flist_item_wrap:hover {
    border-top-color: #484B4E;
    background-color: #494D50;
}

.flist_item_name {
    color: #FFF;
}

.flist_item_action {
    background: url(https://habrastorage.org/web/96b/5cd/b38/96b5cdb382764f17b7671ea230825248.png) no-repeat 0 -26px;
}

em.highlight {
    background-color: rgba(126, 187, 255, 0.2);
}

.mv_recom_block .mv_recom_block_title {
    color: #FFF;
}

#mv_comments_header {
    background: #494D50;
    color: #FFF;
}

.mv_more, .mv_more.idd_wrap {
    color: #C4D1DE;
}

.mv_comments_summary {
    border-bottom-color: #484B4E;
    color: #C4D1DE;
}

.idd_popup .idd_item.idd_hl {
    background-color: #74797D;
}

a:hover .left_count_wrap {
    background: #F05C44;
}

.video_choosebox_bottom {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.video_item_title em {
    background-color: rgba(98, 135, 174, 0.5);
}

.search_focused .highlight {
    background-color: #494D50;
}

.mv_comments_restricted_msg {
    border-top-color: #484B4E;
}

.mv_subscribe_block .mv_subscribe_btn_count {
    background-color: #494d50;
    color: #fff;
}

.mv_subscribe_block .mv_subscribe_btn_count:after {
    border-left-color: #494d50;
}

.mv_is_in_progress {
    color: #fff;
    background-color: #484b4e;
}

.mv_desc .can_edit:hover {
    background-color: #484b4e;
}

#mv_warning {
    background-color: #373b3e;
}

.page_media_poll_wrap {
    border: 1px solid rgba(255, 255, 255, .12);
    background-color: #494D50;
}

.page_media_poll_title {
    color: #FFF;
}

.page_media_poll .page_poll_percent {
    background: #9BB3CC;
}

.page_media_poll .page_poll_row_percent {
    color: #FFF;
}

.wall_module .reply ~ .reply .dld, .wall_module .reply ~ .reply .reply_wrap {
    border-top-color: #484B4E;
}

.stl_active.over_fast #stl_bg {
    background-color: #373B3E;
}

#stl_text {
    color: #FFF;
    background: url(https://habrastorage.org/web/9b5/1bb/1c4/9b51bb1c48824d918691e7bf6b4e04f8.png) no-repeat;
}

#wk_box {
    background: #373B3E;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.page_media_link_desc_td {
    border-color: rgba(255, 255, 255, 0.12);
}

.wk_extpage_footer_wrap {
    background: #373B3E;
    color: #C1C1C1;
    border-top-color: #484B4E;
}

.wk_text blockquote {
    background-color: #494D50;
}

.wl_replies_header {
    background: #373B3E;
    color: #E4E6E9;
    border-color: #484B4E;
}

.wall_module .wl_reply_form_fixed .reply_box, .wall_module .wl_reply_form_fixed .reply_fakebox_wrap {
    border-top-color: #484B4E;
}

.wk_external_content .wk_header, .wk_external_content .wk_sub_header, .wk_external_content .wk_sub_sub_header {
    color: #93ADC8;
}

.wl_more_action.idd_wrap {
    color: #8D98A9;
}

.wl_replies_header.wl_replies_header_clickable:hover {
    background-color: #494D50;
}

.like_share_radio .wdd_text {
    color: #fff !important;
    background-color: #373B3E;
}

div.wdd {
    background-color: #373B3E;
    border-color: #484B4E;
}

.wddi_no {
    background-color: #494D50;
}

.wddi, .wddi_over {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.wdd_list {
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.wddi_text {
    color: #FFF;
}

.wddi_sub {
    color: #A5A5A5;
}

#wpost_post {
    border-color: #C4D1DE;
}

.wpost_owner_head_wrap {
    background-color: #494D50;
}

a.wpost_owner_head_name {
    color: #FFF;
}

a.wl_owner_head_date {
    color: #9C9C9C;
}

a.wl_owner_head_date {
    color: #9C9C9C;
}

#wpost_post {
    border-color: #C4D1DE;
    background-color: #494D50;
}

#wpost_post .post_like, #wpost_post .post_share, #wpost_post .post_comments, #wpost_post .wpost_reply_to {
    background: #373B3E;
}

#wpost_post .post_like:hover, #wpost_post .post_share:hover {
    background: rgba(95, 131, 173, 0.2);
}

.wdd_add2 {
    background: #6F7477;
}

.wdd_add3 {
    color: #CACACA;
}

.wddi_thumb.online.mobile:after {
    background-color: #394046;
    border-color: #394046;
}

.wddi_thumb.online:after {
    border-color: #394046;
}

.wddi, .wddi_over {
    background-color: #373B3E;
    border-top-color: rgba(0, 0, 0, 0);
}

.wddi_over {
    background-color: #494D50;
}

.wddi_thumb.online:after {
    border-color: #373B3E;
}

.wddi_over .wddi_thumb.online:after {
    border-color: #494D50;
}

div.wdd.wdd_focused {
    border-color: #484B4E;
}

.ms_items_more_wrap.to_down .ms_items_more:before {
    border-bottom-color: #484B4E;
}

.ms_items_more_wrap.to_down .ms_items_more:after {
    border-bottom-color: #373B3E;
}

.wddi_over .wddi_thumb.online.mobile:after {
    background-color: #494D50;
}

.top_result_baloon {
    box-shadow: 0 2px 15px #000;
}

.page_block_header {
    background: #373B3E;
    border-bottom-color: #484B4E;
    color: #FFF;
}

.docs_item {
    border-top-color: #484B4E;
}

a.docs_item_name {
    color: #FFF;
}

.docs_choose_upload_area {
    background-color: #282B2F;
    color: #FFF;
}

.docs_choose_upload_area:hover {
    background-color: #494D50;
}

.docs_choose_rows .docs_item:hover {
    background-color: #494D50;
}

.docs_choose_rows .docs_item {
    border-bottom-color: #484B4E;
}

.docs_choose_dropbox_wrap {
    border-color: #fff;
    background-color: #494D50;
}

.docs_panel {
    background: #373B3E;
}

a b, b a {
    color: #FFFFFF;
}

ul.listing li span {
    color: #FFF;
}

.photos_choose_upload_area {
    background: #282B2F;
    color: #FFF;
}

.photos_choose_upload_area:hover {
    background: #494D50;
}

.web_cam_photo {
    background-color: #282B2F;
    color: #FFF;
}

.photos_container_albums .photos_album_thumb {
    background-color: #494D50;
}

.web_cam_photo:hover {
    background: #494D50;
}

.photos_choose_bottom {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.choose_search_cont input {
    background: #373B3E url(https://habrastorage.org/web/7a8/deb/787/7a8deb7875e546ada8900f7ddd4bc8f8.png) no-repeat 5px 6px;
}

.dropbox_over .photos_choose_upload_area_drop, .photos_choose_upload_area_enter .photos_choose_upload_area_drop {
    background-color: #494D50;
}

.photos_choose_more, .photos_choose_more_albums {
    background: #373B3E;
    color: #FFF;
}

.owner_photo_additional {
    background: #373B3E;
    color: #FFF;
    border-top-color: #484B4E;
}

.owner_photo_additional {
    background: #373B3E;
    color: #FFF;
}

.photos_container_albums .photos_album_no_cover .photos_album_title_wrap {
    color: #FFF;
}

.graffiti_wrap {
    background-color: #373B3E;
}

.graffiti_tools {
    background-color: #373B3E;
}

.graffiti_resize {
    border-bottom-color: #484B4E;
}

.graffiti_slider_caption {
    color: #FFF;
}

.docs_tags_desc {
    color: #9CA0A7;
}

.friends_user_row {
    border-top-color: #484B4E;
}

.friends_user_row .online.mobile::after {
    background-color: #373B3E;
}

.friends_user_row .online::after {
    border-color: #373B3E;
}

.group1 {
    background-color: rgba(196, 209, 222, 0.4);
    color: #C4D1DE;
}

.group2 {
    background-color: rgba(196, 209, 222, 0.4);
    color: #C4D1DE;
}

.group3 {
    background-color: rgba(196, 209, 222, 0.4);
    color: #C4D1DE;
}

.group4 {
    background-color: rgba(196, 209, 222, 0.4);
    color: #C4D1DE;
}

.group5 {
    background-color: rgba(196, 209, 222, 0.4);
    color: #C4D1DE;
}

.friends_search_filters, .friends_search_import {
    background-color: rgb(55, 59, 62);
}

.friends_import_row:hover {
    background-color: #494D50;
}

.friends_find_user_name {
    color: #fff;
}

.result_list ul li.active {
    background: #484B4E;
    color: #fff;
}

.result_list ul {
    background: #373B3E;
}

.search_query_wrap .result_list {
    border-color: #484B4E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.result_list ul li {
    color: #BDBDBD;
}

.search_row {
    border-top-color: #484B4E;
}

.search_row .online:after {
    border-color: #373B3E;
}

.search_row .online.mobile:after {
    background-color: #373B3E;
}

.friends_phonebook .friends_field {
    color: #C4D1DE;
}

.ui_rmenu_sep {
    border-top-color: #484B4E;
}

.tt_default.tt_left:before {
    border-right-color: #484B4E;
}

.tt_default.tt_left:after {
    border-right-color: #373B3E;
}

.friends_actions_menu .ui_actions_menu:before {
    border-bottom-color: #484B4E;
}

.friends_actions_menu .ui_actions_menu:after {
    border-bottom-color: #373B3E;
}

.flist_summary_sep .clear {
    border-bottom-color: #484B4E;
}

.bd_header_info {
    color: #C4D1DE;
}

.bd_name a {
    color: #fff;
}

.bd_row {
    border-bottom-color: #484B4E;
}

.bd_arrow {
    background-color: #282B2F;
}

.bd_day_head {
    background-color: #282B2F;
    color: #fff;
    border-bottom-color: #282B2F;
}

.bd_day_cell {
    background-color: #494D50;
    border-right-color: #282B2F;
    border-bottom-color: #282B2F;
}

.bd_day_cell.left {
    border-left-color: #282B2F;
}

.bd_day_num {
    color: #fff;
}

.bd_day_cell.holiday {
    background-color: #494D50;
}

.bd_day_cell.holiday.today .bd_day_events, .bd_day_cell.today .bd_day_events {
    border-color: #fff;
    background-color: #81909C;
}

.mail_box_cont {
    background: #373B3E;
}

.mail_box_label_peer {
    color: #FFF;
}

.mbe_rc_emojibtn:hover {
    background: #494D50;
}

#mail_box_editable {
    background-color: #494D50;
    color: #FFF;
    border-color: #81878C;
}

.emoji_tt_wrap.emoji_shop_over.tt_down:after {
    border-top-color: #494D50;
}

.group_list_row {
    border-bottom-color: #484B4E;
}

.module_header .header_top {
    color: #FFF;
}

.page_actions_dd_label, .page_actions_header_inner {
    color: #BFBFBF;
}

.page_actions_header {
    background: #373B3E;
}

.page_actions_inner {
    border-top-color: #484B4E;
}

.page_actions_wrap {
    background-color: #373B3E;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    border-color: #282B2F;
}

.page_actions_item {
    color: #FFF;
}

.page_actions_item:hover {
    background-color: #494D50;
}

.page_actions_separator {
    border-top-color: #484B4E;
}

.group_wiki_hider:hover {
    background: #494D50;
}

.wide_column .topics_module .topic_title {
    color: #C4D1DE;
}

.topics_module .topic_inner_link {
    color: #CCC;
}

.wide_column .topics_module .topic_row {
    border-top-color: #484B4E;
}

.page_top {
    border-bottom-color: #484B4E;
}

.module_header .header_top {
    border-color: #484B4E;
}

.photos_period_delimiter_fixed {
    background-color: #373B3E;
}

.bp_post {
    border-color: #484B4E;
}

.ba_post {
    background: #373B3E;
    border-top-color: #484B4E;
}

.bp_author {
    color: #C4D1DE;
}

.pg_lnk_sel .pg_in {
    color: #FFF;
}

.blst_row {
    border-bottom-color: #484B4E;
}

.blst_title {
    color: #FFF;
}

.blst_mem {
    color: #C4D1DE;
}

.blst_last:hover {
    background-color: #494D50;
}

.bt_header {
    border-bottom-color: #484B4E;
}

.public_help_steps_module .public_help_steps_link:hover {
    background-color: #494D50;
}

.my_current_info:hover, .no_current_info:hover {
    background-color: #494D50;
}

.module.empty .module_body {
    border-top-color: #484B4E;
}

.group_box_row {
    border-bottom-color: #484B4E;
}

.group_box_row:last-child {
    border-bottom-color: #484B4E;
}

.box_botsh .box_controls {
    border-top-color: #484B4E;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, .6);
}

.video_sort_dd_wrap .video_sort_dd {
    color: #949494;
}

h2 {
    color: #fff;
}

.im-mess.im-mess_gift {
    background-color: rgba(114, 147, 182, 0.1) !important;
}

.im-mess.im-mess_gift.im-mess_selected, .im-mess.im-mess_gift.im-mess_selected:hover {
    background: #3D434A !important;
}

.group_box_name {
    color: #C4D1DE;
}

.medadd_c_pollh, .medadd_h {
    color: #FFF;
}

.medadd_c_linkcon {
    background: #373B3E;
    border-color: #494D50;
}

h4 {
    color: #FFF;
}

.group_box_name .group_link, .group_box_name .mem_link {
    color: #C4D1DE;
}

#stats_cont h4, .stats_head {
    color: #c4d1de;
    border-top-color: #484B4E;
}

.piechart_col_header th {
    background-color: #484B4E;
}

.graph_menu_item:hover {
    color: #FFF;
    background: #484B4E;
}

.piechart_table tr td {
    border-bottom-color: #484B4E;
}

.stats_time_info {
    border-top-color: #484B4E;
}

#stats_export_box .label {
    color: #FFF;
}

#visitors_graph > div > div > div > div {
    background-color: #282B2F !important;
}

#sex_age_graph > div > div > div > div {
    background-color: #282B2F !important;
}

#sex_graph > div > div > div > div {
    background-color: #282B2F !important;
}

a.groups_messages_block {
    color: #FFF;
}

.im-page.im-page_group .im-page--dcontent {
    background-color: #373B3E;
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

.im-page.im-page_group .im-page--header {
    border-color: #484B4E;
}

.im-page.im-page_group .im-page--dialogs-search {
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

.im-page.im-page_group .im-page--chat-body-wrap-inner {
    background-color: #373B3E;
}

.im-chat-input.im-chat-input_group {
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

.im-page.im-page_group .im-page--chat-input {
    border-color: #484B4E;
    background-color: #373B3E;
}

.im-page.im-page_group .im-page--header-inner {
    background-color: #373B3E;
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

.im-page.im-page_group .im-page--chat-body-abs {
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

.im-page.im-page_group .im-page--header-chat {
    border-color: #484B4E;
}

.im-page a.im-page--back-button:hover {
    background-color: #494D50;
}

a.groups_messages_block:hover {
    color: #C4D1DE;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic, .nim-dialog:not(.nim-dialog_deleted):hover {
    background-color: #494d50;
}

.pv_cont .narrow_column {
    background-color: #373B3E;
}

#pv_author_block {
    background-color: #282B2F;
    border-bottom-color: #484B4E;
}

.pv_comments {
    border-top-color: #484B4E;
}

.pv_closed_commments_placeholder, .pv_no_commments_placeholder {
    background-image: url("https://habrastorage.org/web/6f4/51e/a60/6f451ea606d24b528336b89ec8aa2b98.png");
}

.wall_module .reply_box, .wall_module .reply_fakebox_wrap {
    border-top-color: #484B4E;
}

.pv_narrow_column_wrap {
    background-color: #373B3E;
}

.pv_like {
    color: #C4D1DE;
}

.pv_like:hover {
    background-color: #494D50;
}

.pv_can_edit:hover {
    background-color: #494D50;
}

.pv_reply_form_wrap, .pv_reply_form_wrap .reply_field {
    background-color: #373B3E;
}

.photos_container .photos_row {
    background-color: #494D50;
}

.page_group_name {
    color: #FFF;
}

.pe_tabs_panel {
    background-color: #282B2F;
}

.pe_actions {
    background-color: #494D50;
}

.pe_actions .pe_action > div {
    -webkit-filter: brightness(1.5) grayscale(0.2);
    filter: brightness(1.5) grayscale(0.2);
}

.pe_blur_input, .pe_text_input {
    background-color: #494D50;
}

.pe_text_input .pe_text_font_changer {
    -webkit-filter: brightness(1.5) grayscale(0.2);
    filter: brightness(1.5) grayscale(0.2);
}

.pe_type_chooser_item {
    color: #FFF;
}

.pe_type_chooser_item:hover {
    background-color: #494D50;
}

.pe_params_slider_label {
    color: #FFF;
}

.pe_undo_wrap #pe_undo {
    color: #FFF;
}

.pe_undo_wrap #pe_undo {
    color: #FFF;
}

.pe_text_input textarea {
    color: #FFF;
}

.ui_ownblock:hover {
    background-color: #494D50;
}

.group_voting_title {
    color: #c1cddb;
}

.bv_title {
    color: #c4d1de;
}

.bv_wrap .bt_pages_wrap {
    border-bottom-color: #484b4e;
}

.pv_white_bg {
    background: #373B3E;
}

.counts_module {
    border-top-color: #484B4E;
}

.page_counter .count {
    color: #C4D1DE;
}

.page_counter:hover .label {
    color: #C4D1DE;
}

.profile_more_info_link:hover {
    background-color: #494D50;
}

.profile_info_header {
    background-color: #373B3E;
}

.profile_info_edit {
    background-color: #373B3E;
}

.profile_info_header_wrap a {
    color: #C4D1DE;
}

.profile_info_block {
    border-top-color: #484B4E;
}

.page_status_f .editor {
    border-color: #484B4E;
    background-color: #373B3E;
}

.lang_box_row:hover {
    background-color: #494D50;
}

.lang_selected .lang_box_row_label {
    color: #FFF;
}

.lang_box_row_label {
    color: #969696;
}

.mention_tt.tt_up:after {
    border-bottom-color: #373B3E;
}

.mention_tt.tt_up:before {
    border-bottom-color: #484B4E;
}

.fans_idol_lnk {
    color: #C4D1DE;
}

.gifts_box_rows .post {
    border-bottom-color: #484B4E;
}

.ui_crumb_count {
    color: #C3C3C3;
}

.box_grey .box_title .divider:before, .box_grey .box_title .tab_link, .box_grey .box_title .toggle, .box_grey .box_title .toggle a {
    color: #FFF;
}

.gifts_promo_descr {
    background-color: #373B3E;
}

.box_error, .box_msg, .error, .info_msg, .msg, .ok_msg {
    border-color: #494D50;
}

.gifts_section_header {
    color: #FFF;
}

.gifts_section_row {
    border-bottom-color: #484B4E;
}

.feed_updates .wall_module .feed_row .post {
    border-top-color: #484B4E;
}

.page_album_nocover .page_album_title {
    color: #B1BFCC;
}

.page_album_nocover {
    background-color: #484B4E;
}

.profile_online {
    color: #BBE6AC;
}

.blocked_image {
    border-radius: 3px;
    -webkit-filter: grayscale(1) opacity(0.7);
    filter: grayscale(1) opacity(0.7);
}

.wl_post_reply_form_forbidden {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.reply_submit_hint_title {
    color: #C4D1DE;
}

.reply_submit_hint_opts .radiobtn {
    color: #FFF;
}

.tt_default_right.tt_down:before {
    border-top-color: #484B4E;
}

.tt_default_right.tt_down:after {
    border-top-color: #373B3E;
}

.eltt.eltt_top:before {
    border-top-color: #484B4E;
    margin-left: -6px;
}

.eltt.eltt_top:after {
    border-top-color: #373B3E;
    margin-left: -6px;
}

.gift_tt_header {
    color: #fff;
}

.gift_tt_show_all {
    background-color: #373b3e;
    border-top-color: #484b4e;
}

.gift_tt_show_all:hover {
    background-color: #494d50;
}

.page_album_thumb_wrap {
    background-color: #484b4e;
}

.profile_warning_row {
    color: #fff;
}

.page_block_sub_header {
    color: #FFF;
}

.header_side_link, .header_side_link a {
    color: #C5C5C5;
}

.app_link {
    color: #FFF;
}

.apps_i_wrap {
    background-color: #373B3E;
}

.apps_i_panel {
    background-color: #373B3E;
    border-bottom-color: #484B4E;
}

.apps_i_policy {
    background-color: #373B3E;
    border-color: #484B4E;
}

div#wk_content {
    background-color: #373B3E;
}

h1 {
    color: #FFF;
}

.apps_i_users, .apps_ss_playing {
    color: #A1AAB1;
}

.apps_access_item_info b {
    color: #fff;
}

.apps_access_item {
    color: #A1AAB1;
}

.apps_i_group .apps_i_group_name {
    color: #fff;
}

.page_actions_cont.narrow .page_actions_header_inner {
    color: #FFF;
}

.groups_actions_menu .ui_actions_menu:before {
    border-bottom-color: #484B4E;
}

.groups_actions_menu .ui_actions_menu:after {
    border-bottom-color: #373B3E;
}

.settings_line {
    border-bottom-color: #484B4E;
}

.settings_block_footer {
    border-top-color: #484B4E;
    background: #373B3E;
}

.box_msg, .msg {
    background-color: #494D50;
}

.settings_label {
    color: #FFF;
}

.settings_block_msg {
    border-bottom-color: #484B4E;
}

.settings_bl_row {
    border-bottom-color: #484B4E;
}

.settings_blb_row {
    border-bottom-color: #484B4E;
    background-color: #373B3E;
}

a.settings_blb_title {
    color: #FFF;
}

.settings_blb_row:last-child {
    border-bottom-color: #484B4E;
}

.settings_blb_row:last-child {
    border-bottom-color: #484B4E;
}

.settings_apps .app_settings_name, .settings_apps .app_settings_name a {
    color: #FFF;
}

.subheader {
    color: #FFF;
}

.apps_access_item_info b {
    display: block;
}

.settings_table_row {
    border-bottom-color: #484B4E;
}

.settings_line.unfolded {
    background-color: #373B3E;
    border-top-color: #484B4E;
}

.fakeinput, div[contenteditable=true], input.big_text, input.dark, input.search, input.text, textarea {
    border-color: #484B4E;
}

#payments_box .payments_about_votes, .payments_about_votes {
    border-top-color: #484B4E;
    background-color: #373B3E;
}

#payments_box {
    color: #FFF;
}

.payments_getvotes_method_opt.payments_getvotes_active_row, .payments_getvotes_method_opt:hover {
    background-color: #494D50;
}

.payments_getvotes_method_opt {
    color: #8C8C8C;
}

.payments_getvotes_method_title {
    color: #FFF;
}

h2.payments_getvotes_title {
    color: #FFF;
    border-bottom-color: #484B4E;
}

.payments_getvotes_amounts .radiobtn b {
    color: #FFF;
}

.payments_getvotes_amounts .radiobtn .payments_opt_amount {
    color: #9E9E9E;
}

td.selector input.selector_input.selected {
    color: #fff !important;
}

.prefix_input_wrap {
    background-color: #373B3E;
}

.prefix_input_border {
    border-color: #484B4E;
}

.payments_getvotes_phone .payments_form_row, .payments_getvotes_phone .payments_form_row input {
    color: #fff;
}

.prefix_input_prefix {
    color: #CCC;
}

.payments_getvotes_ps_row.payments_getvotes_active_row, .payments_getvotes_ps_row:hover {
    background-color: #494D50;
}

.payments_getvotes_ps_title {
    color: #FFF;
}

.payments_getvotes_ps_title {
    color: #FFF;
}

.payments_offer_row {
    border-top-color: #484B4E;
}

.payments_offer_row .payments_offer_hover, .payments_offer_row:hover {
    background-color: #494D50;
    border-bottom-color: #494D50;
}

.payments_offer_row_title {
    color: #FFF;
}

.payments_offer_row_desc {
    color: #A9A9A9;
}

.settings_apps .apps_settings_row_wrap {
    border-top: none;
    border-bottom-color: #484B4E;
}

.settings_deact_header {
    color: #C4D1DE;
}

.pedit_separator {
    border-top-color: #484B4E;
}

.pedit_label, .pedit_label_box {
    color: #FFF;
}

.result_list {
    border-color: #484B4E;
}

.selector_container td.selector input.focused, .selector_container td.selector input.selected {
    color: #fff !important;
}

.dividing_line ul li {
    border-bottom-color: #484B4E;
}

.result_list li.disabled {
    background: #373B3E;
}

.result_list ul li em {
    background-color: #484B4E;
}

.selector_container td.selector .token {
    color: #C4D1DE;
}

.disabled.selector_container table.selector_table {
    border-color: #484B4E;
}

.disabled.selector_container {
    background-color: #373B3E;
}

.faq_tabs.ui_tabs {
    background-color: #373B3E;
}

.help_tile__title_a {
    color: #C4D1DE;
}

.help_tile_faqs__row_a {
    color: #FFF;
}

.help_tile__all {
    color: #BFBFBF;
}

.help_table_questions__title {
    color: #FFF;
}

.help_table_questions {
    border-right-color: #484B4E;
}

.help_table_question {
    border-bottom-color: #484B4E;
}

.help_table_question_visible {
    background-color: #494D50;
}

.help_table_question_visible .help_table_question__q {
    color: #C4D1DE;
}

.help_table_question_act {
    background-color: #646A6F;
    color: #BBC8D2;
}

.help_table_question_act:hover {
    background-color: #899198;
}

.tu_row {
    border-bottom-color: #484B4E;
}

.tu_row_title__a {
    color: #FFF;
}

.tu_row_comment {
    color: #C4D1DE;
}

.tu_mem {
    color: #FFF;
}

.tu_last:hover {
    background: #494D50;
    border-radius: 2px;
}

.tickets_header {
    color: #FFF;
    border-bottom-color: #484B4E;
}

.tickets_author .mem_link {
    color: #C4D1DE;
}

.tickets_author {
    color: #C4D1DE;
}

.tickets_reply_text {
    color: #FFF;
}

.tickets_reply_row {
    border-top-color: #484B4E;
}

.tickets_thank_you_form {
    background: #373B3E;
    border-top-color: #484B4E;
}

.tickets_suggests_wrap {
    background-color: #373B3E;
    border-color: #484B4E;
}

.tickets_suggest {
    border-bottom-color: #484B4E;
}

.tickets_suggest:hover {
    background-color: #494D50;
}

.faq_search_form {
    box-shadow: 0 0 0 1px rgb(72, 75, 78);
}

.tickets_suggests_all_results {
    color: #FFF;
}

.tickets_suggests_all_results:hover {
    background-color: #494D50;
}

.help_tile_alert_urgent .help_tile_alert__title {
    color: #fff;
}

.help_tile_alert {
    border-bottom-color: #484b4e;
}

.help_table_question_btn {
    color: #fff;
}

.group_edit_label {
    color: #FFF;
}

.fakeinput, input.big_text, input.file, input.search, input.text, input[type=button], input[type=password], input[type=search], input[type=submit], input[type=text], input[type~=email], input[type~=password], input[type~=search], input[type~=text], textarea {
    color: #fff;
    background: #373b3e;
}

.group_edit_row_sep {
    border-bottom-color: #484B4E;
}

.group_edit_labeled .idd_wrap .idd_selected_value {
    color: #C4D1DE;
}

.tt_w.group_edit_obscene_words_hint .tt_text {
    color: #C5C5C5;
}

.wk_print_view#wk_box {
    background-color: #373B3E;
}

.wk_print_view .print_content {
    background-color: #373B3E;
}

.print_header {
    background-color: #373B3E;
}

.wk_print_view #wk_summary .summary {
    color: #FFF;
}

.print_search_header {
    color: #FFF;
}

.group_l_row {
    border-bottom-color: #484B4E;
    background-color: #373B3E;
}

a.group_l_title, a.group_u_title {
    color: #FFF;
}

.group_u_photo.online:after {
    border-color: #373B3E;
}

.group_l_row:last-child {
    border-bottom-color: #484B4E;
}

.blog_entry_title, .blog_entry_text {
    color: #FFF;
}

.blog_right_list_title {
    color: #FFF !important;
}

.blog_redesign_title {
    color: #C4D1DE;
}

.blog_redesign_descr {
    color: #959AA0;
}

.blog_entry_like_widget {
    border-top-color: #484B4E;
}

.blog_arhive_title a {
    color: #FFF;
}

.blog_arhive_item {
    border-bottom-color: #484B4E;
}

.blog_entry_text b {
    color: #C4D1DE;
}

.blog_about_tabs_line, .blog_about_tabs_line2 {
    background: -o-linear-gradient(right, #484B4E, rgba(238, 240, 243, 0));
    background: linear-gradient(270deg, #484B4E, rgba(238, 240, 243, 0));
}

.blog_about_tabs_line2 {
    background: -o-linear-gradient(left, #484B4E, rgba(238, 240, 243, 0));
    background: linear-gradient(90deg, #484B4E, rgba(238, 240, 243, 0));
}

.blog_about_company_descr {
    color: #FFF;
}

.blog_about_company_stats, .blog_about_press {
    background-color: #282B2F;
}

.blog_about_company_stat_number {
    color: #C4D1DE;
}

.blog_about_company_stat_descr {
    color: #FFF;
}

.blog_about_big_title {
    color: #C4D1DE;
}

.blog_about_company_office_city {
    color: #C4D1DE;
}

.blog_about_link_title {
    color: #FFF;
}

.blog_about_page .footer_wrap {
    background-color: #282B2F;
    border-top-color: #484B4E;
}

#page_layout {
    background-color: #282B2F;
}

.blog_products_page .blog_about_company_stats, .blog_products_page .blog_about_press {
    background-color: #373B3E;
}

.blog_product, .blog_snapster {
    box-shadow: 0px 1px 0px 0px #595D61, 0px 0px 0px 1px #595D61;
    background-color: #3F4448;
}

.blog_product_title, .blog_snapster_title {
    color: #C4D1DE;
}

.blog_snapster_photo {
    background-color: #41464A;
}

.blog_snapster_descr {
    color: #FFF;
}

.blog_job:hover {
    background: #494D50;
    border-radius: 3px;
}

.jobs_form .label {
    color: #FFF;
}

.jobs_apply_form #jobs_apply_upload_cont .button_blue button {
    background-color: #484B4E;
    color: #FFF;
}

.jobs_form hr {
    border-bottom-color: #484B4E;
}

body.dev {
    background: #282B2F;
}

#dev_page_wrap1, .dev_page_block {
    background-color: #373B3E;
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
    color: #FFF;
}

.dev_page_cont .wk_header, .dev_page_cont .wk_sub_header, .dev_page_cont .wk_sub_sub_header {
    color: #C4D1DE;
}

#dev_left_nav {
    background-color: #373B3E;
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

.dev_nav a.nav.nav_selected, .dev_nav a.nav.nav_selected:hover {
    background-color: #494D50;
}

.dev_nav .nav:hover {
    background-color: #494D50;
}

.dev_nav a.nav.submenu.nav_selected, .dev_nav a.nav.submenu.nav_selected:hover {
    color: #FFF;
}

body.dev .wk_text blockquote {
    background-color: #494D50;
}

body.dev #stl_bg #stl_text {
    color: #FFF;
    background: url(https://habrastorage.org/web/9b5/1bb/1c4/9b51bb1c48824d918691e7bf6b4e04f8.png) no-repeat;
}

body.dev .stl_active.over_fast #stl_bg {
    background-color: #494D50;
}

.tt .tt_text {
    background-color: #373B3E;
    border-color: #484B4E;
    color: #fff;
}

.tickets_side_tt.text .hint_wrap {
    color: #FFF;
}

.tickets_tt_list, .tickets_tt_list_abuse {
    color: #FFF;
}

.tickets_side_tt.extra_field:before, .tickets_side_tt.text:before, .tickets_side_tt.title:before {
    border-left-color: #484B4E;
}

.tickets_side_tt.extra_field:after, .tickets_side_tt.text:after, .tickets_side_tt.title:after {
    border-left-color: #373B3E;
}

.tickets_side_tt.title .hint_wrap {
    color: #FFF;
}

.dev_sect_widgets {
    border-color: #484B4E;
}

.dev_info_status_header {
    color: #C4D1DE;
}

.dev_part_name {
    color: #C4D1DE;
}

.dev_sect_label {
    color: #C4D1DE;
}

.dev_info_uptime {
    border-top-color: #484B4E;
}

.dev_part_desc {
    color: #FFF;
}

.dev_info_header {
    color: #FFF;
}

body.dev a.dev_platform_info {
    color: #969696;
}

.community_wall {
    background: #373B3E;
}

.color2 {
    color: #C4D1DE;
}

#community_groups_main .wall_post_text {
    color: #fff;
}

.dev_part:hover {
    background-color: #494D50;
    border-radius: 2px;
}

.dev_nav a.nav.nav_selected, .dev_nav a.nav.nav_selected:hover {
    color: #FFF;
}

.market_item_photo_container {
    background-color: #282B2F;
}

.market_item_content {
    background-color: #373b3e;
}

.market_item_owner {
    border-bottom-color: #484b4e;
}

.market_item_title {
    color: #fff;
}

.market_item_price {
    color: #ABD99A;
}

.market_item_footer_wrap {
    border-top-color: #484b4e;
}

.market_item_thumb_active {
    box-shadow: inset 0 0 0 3px #373b3e;
}

.market_item_owner_name {
    color: #fff;
}

.market_like:hover, .market_share:hover {
    background-color: #494D50;
}

.market_like, .market_share {
    color: #C4D1DE;
}

.market_like_count {
    color: #fff;
}

.market_share_count {
    color: #fff;
}

.market_comments_header {
    background-color: #494D50;
    color: #C4D1DE;
}

.market_comments_header:hover {
    background-color: #60758A;
}

.wk_header {
    color: #C4D1DE;
}

.market_comments_summary {
    color: #C4D1DE;
    border-bottom-color: #484b4e;
}

.my_like .market_like_count {
    color: #C4D1DE;
}

.market_album_name_link {
    color: #fff;
}

.microdata_price {
    color: #ABD99A;
}

.wall_module .page_media_market .page_media_link_desc_td .page_media_link_desc {
    color: #a7a7a7;
}

.wk_table th {
    background-color: #494d50;
    border-top-color: #484b4e;
    border-right-color: #484b4e;
}

.wk_table td {
    border-top-color: #484b4e;
    border-right-color: #484b4e;
}

.wk_table {
    border-color: #484b4e;
}

.wk_gray, ul.listing li span .wk_gray {
    color: #adadad;
}

.index_fbsign {
    border-top-color: #484b4e;
}

.index_page .index_footer_wrap {
    border-top-color: #484b4e;
}

.index_page .flat_button.secondary.button_light:hover {
    background-color: #494d50;
}

.join_finish_page #footer_wrap {
    border-top-color: #484b4e;
}

.bottom_row {
    color: #fff;
}

.join_text {
    color: #a7a7a7;
}

input.text.ts_input:focus {
    border-color: #254469 !important;
}

.search_media_rows .header_side_link a, .search_results .header_side_link a {
    color: #c1cddb;
}

.search_results_sep {
    border-bottom-color: #484b4e;
}

.search_auto_results .search_auto_sep {
    border-top-color: #484b4e;
}

.search_auto_results .post_full_like_wrap {
    border-bottom-color: #484b4e;
}

.bottom_row a {
    color: #8EC5FF;
}

.wall_post_text a {
    color: #8EC5FF;
}

.im-mess-stack a {
    color: #8EC5FF;
}

.mv_deleted_message a {
    color: #8EC5FF;
}

.video_item_author a {
    color: #8EC5FF;
}

.labeled_text a {
    color: #8EC5FF;
}

.page_info_wrap a {
    color: #8EC5FF;
}

.im-page.im-page_classic .im-page--header {
    border-top-color: #282b2f;
    border-left-color: #282b2f;
    border-right-color: #282b2f;
}

.im-page.im-page_classic .im-page--dialogs-search {
    box-shadow: 0 0 0 1px #484b4e;
}

.im-page.im-page_classic .im-page--dcontent {
    background-color: #373b3e;
    box-shadow: 0 1px 0 0 #484b4e, 0 0 0 1px #484b4e;
}

.im-page.im-page_classic .im-page--header-chat {
    border-top-color: #282b2f;
    border-left-color: #282b2f;
    border-right-color: #282b2f;
}

.im-page.im-page_classic .im-page--header-inner {
    background-color: #373b3e;
    box-shadow: 0 0 0 1px #484b4e;
}

.im-page.im-page_classic .im-page--chat-body-wrap-inner {
    background-color: #373b3e;
}

.im-page.im-page_classic .im-page--chat-body-abs {
    box-shadow: 0 1px 0 0 #484b4e, 0 0 0 1px #484b4e;
}

.im-page.im-page_classic .im-page--chat-input {
    border-bottom-color: #282b2f;
    background-color: #373b3e;
    border-left-color: #282b2f;
}

.im-page.im-page_classic .im-page--chat-input {
    border-bottom-color: #282b2f;
    background-color: #373b3e;
    border-left-color: #282b2f;
    border-right-color: #282b2f;
}

.wall_comments_header {
    border-top-color: #484B4E;
    background-color: #373B3E;
}

.audio_friend.audio_friend_selected {
    background-color: #494D50;
    border-left-color: #C4D1DE;
}

.friends_list_bl {
    border-top-color: #484B4E;
}

.im-member-item {
    border-bottom-color: #484B4E;
}

.im-chat-input .nim-peer {
    border-color: #373B3E;
}

textarea.page_poll_export_code {
    background-color: #373B3E;
}

#pv_box .box_title_wrap a {
    color: #FFF;
}

.sticker_extra_tt .stickers_extra_text > b {
    color: #C4D1DE;
}

.sticker_extra_tt .tt_text, .subscribe_post_tt .tt_text {
    color: #A7A7A7;
}

.no_posts_cover {
    background-image: url(https://habrastorage.org/web/34e/458/1b3/34e4581b385e4fc3852c8c31093cc02d.png);
}

.datepicker_control {
    border-color: #484B4E;
}

.datepicker_text {
    background-color: #373B3E;
    color: #fff;
}

.post_publish {
    border-top-color: #484B4E;
}

.current_audio {
    color: #C4D1DE;
}

.preq_tt {
    border-color: #484B4E;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.6);
}

.preq_friend {
    background-color: #373B3E;
}

.preq_tt:before {
    border-bottom-color: #484B4E;
}

.preq_tt:after {
    border-bottom-color: #373B3E;
}

.im-page .im-page--members, .im-page .im-page--peer-online {
    color: #ABD99A;
}

.mob_onl {
    background-image: url(https://habrastorage.org/web/b88/59c/ea6/b8859cea6ced4c0ba3b5f34058e28c35.png);
}

.login_about_mobile {
    background-color: #373B3E;
    color: #C4D1DE;
    border-top-color: #484B4E;
}

.login_mobile_info {
    color: #FFF;
}

.wall_post_source_icon {
    background-image: url(https://habrastorage.org/web/45a/504/55b/45a50455b88b4b0b90a28f3469d1c800.png);
}

.fakeinput:focus, div[contenteditable=true]:focus, input.big_text:focus, input.dark:focus, input.search:focus, input.text:focus, textarea:focus {
    border-color: #787E84;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted):hover {
    background-color: #494D50;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .nim-dialog, .nim-dialog:not(.nim-dialog_deleted):hover, .nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog {
    border-top-color: #484B4E;
}

div#wk_history_more_link {
    border-top-color: #484B4E;
    color: #fff;
}

.photos_album_intro .photos_album_intro_desc {
    color: #b9b9b9;
}

.wall_tt.tt_default.tt_down:not(.post_source_tt):not(.fw_reply_tt):after {
    border-top-color: #282b2f;
}

.page_doc_row {
    color: #c1cddb;
}

.im-chat-input.im-chat-input_classic {
    box-shadow: 0 1px 0 0 #484b4e, 0 0 0 1px #484b4e;
}

.fans_rows .post_full_like_wrap {
    border-bottom-color: #484b4e;
}

.fans_rows .wall_text + .replies {
    border-bottom-color: #484b4e;
}

.top_nav_btn a b {
    color: #c1cddb;
}

.chat_tab_typing_wrap {
    background-color: #494d50;
}

.ui_gridsorter_cont .ui_gridsorter_moveable {
    background-color: #494d50;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered, .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .im-page--messages-search, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .im-page--messages-search, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .nim-dialog, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .im-page--messages-search, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .nim-dialog, .nim-dialog:not(.nim-dialog_deleted):hover + .im-page--messages-search, .nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog {
    border-top-color: #484b4e;
}

.group_row_info {
    color: #808080;
}

.page_media_link_addr, .page_media_link_addr a {
    color: #808080;
}

.wk_poll_tabs {
    background: #373b3e;
    border-bottom-color: #484b4e;
}

.wk_poll_dmgr {
    background-color: #373b3e;
    border-top-color: #484b4e;
}

.summary_tab3 {
    color: #fff;
}

.summary_tab2:hover {
    background-color: #494d50;
}

.wk_poll_extra_checkbox .idd_selected_value {
    color: #8EC5FF;
}

.wdd_hl {
    background-color: #6e7479;
}

.apps_notification_header a {
    color: #c1cddb;
}

.im-page .im-page--top-date-bar {
    color: #fff;
}

.im-page .im-page--top-date-bar-inner {
    background-color: #494d50;
}

.im-page a.im-page--back-button:hover:before {
    background: -o-linear-gradient(right, #494d50, #484b4e 20%);
    background: linear-gradient(270deg, #494d50, #484b4e 20%);
}

.pv_author_block {
    background-color: #373b3e;
    border-bottom-color: #484b4e;
}

.pv_cont .pv_comments_header {
    background-color: #494d50;
    color: #fff;
}

.pv_cont .pv_comments_header:hover {
    background-color: #60758A;
}

.ui_scroll_default_theme .ui_scroll_bar_inner {
    background-color: #7E8082;
}

.ui_scroll_default_theme .ui_scroll_bar_container:hover .ui_scroll_bar_inner, .ui_scroll_default_theme.ui_scroll_dragging .ui_scroll_bar_inner {
    background-color: #BEBFC0;
}

.wall_module .reply_box, .wall_module .reply_fakebox_wrap {
    border-top-color: #484b4e;
    background-color: #373b3e;
}

.wall_module .reply_form {
    background-color: #373b3e;
}

.pe_editor .pe_sticker_preview:hover {
    background-color: #494d50;
}

.pe_editor .pe_bottom_actions {
    border-top-color: #484b4e;
}

.pe_editor .pe_tabs {
    border-bottom-color: #373b3e;
}

.pe_editor .pe_drawing_undo {
    color: #c1cddb;
}

.pe_editor .pe_drawing_undo:hover {
    background-color: #494d50;
}

.pe_editor .pe_label {
    color: #fff;
}

.pe_editor .pe_sticker_packs_tabs {
    background-color: #282b2f;
}

.pe_editor .pe_sticker_pack_tab_btn.pe_right {
    background: -o-linear-gradient(left, rgba(240, 242, 245, 0) 0%, rgba(240, 242, 245, .84) 22%, #282b2f 37%, #282b2f 100%);
    background: linear-gradient(90deg, rgba(240, 242, 245, 0) 0%, rgb(40, 43, 47) 22%, #282b2f 37%, #282b2f);
}

.pe_editor .pe_sticker_pack_tab.pe_selected {
    background-color: #373b3e;
}

.pe_editor .pe_sticker_pack_tab:hover {
    background-color: #494d50;
}

.feedback_header b {
    color: #c1cddb;
}

.subheader, h4.subheader {
    color: #c1cddb;
}

.feedback_header {
    color: #808080;
}

.friends_cur_filters {
    border-bottom-color: #484b4e;
}

.wall_module .published_by_quote, .wall_module .published_sec_quote {
    border-left-color: #484b4e;
}

.page_market_album_title_text {
    color: #c1cddb;
}

.page_market_album_wrap {
    border-color: rgb(72, 75, 78);
}

.mv_actions_block {
    border-bottom-color: #484b4e;
}

.mv_info_wide_column {
    border-right-color: #484b4e;
}

.pv_cont .pv_can_edit:hover {
    background-color: #494d50;
}

.video_upload_ready_name {
    color: #c1cddb;
}

.page_list_module .group_desc, .page_list_module .people_desc, .page_list_module .people_extra {
    color: #7b7b7b;
}

.ui_scroll_emoji_theme .ui_scroll_shadow_bottom, .ui_scroll_emoji_theme .ui_scroll_shadow_top {
    background: url(https://habrastorage.org/web/2fb/fc1/c58/2fbfc1c586b54b4f81165d57b27df4f1.png) 0 -29px;
}

.notify_tt_text {
    color: #a0a0a0;
}

.mv_info {
    background-color: #373b3e;
}

.mv_info_narrow_column {
    border-left-color: #484b4e;
}

.pv_cont .pv_closed_commments_placeholder {
    background-image: url("https://habrastorage.org/web/951/fe1/157/951fe115760e4c95b9a634adcf2dc1c5.png");
}

.pv_desc_more {
    color: #C4D1DE;
}

.module {
    border-color: #484b4e;
}

.ui_scroll_default_theme.ui_scroll_emoji_theme .ui_scroll_shadow_bottom, .ui_scroll_default_theme.ui_scroll_emoji_theme .ui_scroll_shadow_top {
    background: url(https://habrastorage.org/web/2fb/fc1/c58/2fbfc1c586b54b4f81165d57b27df4f1.png) 0 -29px;
    box-shadow: none;
    height: 10px;
}

.apps_main .apps_i_panel {
    background-color: #373b3e;
}

.apps_options_bar {
    background-color: #373b3e;
}

.apps_options_bar .apps_options_bar_left .app_summary_name {
    color: #fff;
}

.link_arrowed_bottom {
    color: #c1cddb;
}

#apps_user_warning_cont, .apps_options_bar {
    border-bottom-color: #484b4e;
}

.apps_footer {
    background-color: #373b3e;
    border-top-color: #484b4e;
}

#payments_box_right_col {
    background-color: #373b3e;
}

.payments_box_wide {
    background-color: #282b2f;
}

.payments_box_wide .payments_getvotes_method_opt:hover {
    background-color: #494d50;
}

.payments_getvotes_ps_row {
    color: #ABD99A;
}

.button_cancel {
    color: #c1cddb;
}

.button_cancel .button.hover, .button_cancel .button:hover, .button_cancel .button_hover, .button_cancel .leave_button:hover {
    background-color: #494d50;
}

.notify_box p, .notifyBox {
    background: #373b3e;
}

.button_cancel .button_hover, .button_cancel .button:hover, .button_cancel .button.hover, .button_cancel .leave_button:hover {
    background-color: #494d50;
}

.notify_box p, .notifyBox {
    color: white;
}

.app_edit_block_header {
    background-color: #373b3e;
    border-bottom-color: #484b4e;
}

.dev_wide_input_wrap {
    border-bottom-color: #484b4e;
}

.bugs_row_title a {
    color: #fff;
}

#bugs_content #summary {
    border-bottom-color: #484b4e;
    color: #cecece;
}

.dev .app_edit_block_header .app_edit_dev_header.app_header_sel {
    color: #fff;
}

.bugs_row {
    border-bottom-color: #484b4e;
}

.bugs_tag {
    background-color: #484b4e;
    color: #c1cddb;
}

.bugs_filters {
    background-color: #494d50;
}

.bugs_filter_label {
    color: #fff;
}

.bugs_tags .summary_tab3 {
    color: #c1cddb;
}

.bugs_table .bugs_tag.over {
    background-color: #6f7377;
}

.bugs_view_title {
    color: #c1cddb;
}

.bugs_view_actions, .bugs_view_author, .bugs_view_subscribe {
    background-color: #494d50;
}

.bugs_info_row {
    color: #a9a9a9;
}

.bugs_author_link a {
    color: #c1cddb;
}

.dev_nav a.nav.submenu {
    color: #808080;
}

.validation_devices_wrap .radiobtn, .validation_row .radiobtn {
    color: #fff;
}

.top_nav_btn b {
    color: #c1cddb;
}

.apps_edit_nav_header {
    background-color: #373b3e;
    border-bottom-color: #484b4e;
}

.apps_edit_nav_label {
    color: #fff;
}

.apps_edit_screen_line {
    border-top-color: #484b4e;
    color: #c1cddb;
}

.apps_edit_retina_info {
    background-color: #373b3e;
    color: #a7a7a7;
}

.apps_edit_thumb_header {
    color: #c1cddb;
}

.apps_edit_box .apps_restrictions {
    color: #c1cddb;
}

.apps_edit_table .label, td.apps_edit_label {
    color: #fff;
}

div.apps_edit_header {
    color: #c1cddb;
}

.apps_edit_rows_review {
    color: #fff;
}

.apps_edit_rows_empty {
    color: #fff;
}

.app_edit_api_counter_wrap_center {
    border-color: #484b4e;
}

.app_edit_api_counter_wrap {
    border-bottom-color: #484b4e;
}

.apps_edit_api_block_selectors .round_tab {
    color: #fff;
}

.round_tab:hover {
    background-color: #494d50;
}

.apps_edit_stat_graph_wrap .summary {
    color: #fff;
}

.app_edit_block_header {
    color: #fff;
}

#app_edit_api_bottom_graphs_wrap {
    border-top-color: #484b4e;
}

.app_edit_api_duration_graph {
    border-color: #484b4e;
}

#apps_edit_admins {
    background-color: #373b3e;
}

.apps_edit_user_type .main {
    color: #fff;
}

.apps_edit_platform_status {
    border-bottom-color: #484b4e;
}

.tickets_bottom_msg {
    border-top-color: #484b4e;
}

.dev_methods_list_desc {
    color: #c7c7c7;
}

.dev_methods_list_row:hover {
    background-color: #494d50;
}

.dev_mlist_item {
    background-color: #494d50;
}

.dev_roadmap_timeline .dev_roadmap_timeline_past .dev_roadmap_timeline_row_time, .dev_roadmap_timeline .dev_roadmap_timeline_past .dev_roadmap_timeline_row_text a {
    color: #fff;
}

.dev_mlist_item:hover {
    background-color: #6f7579;
}

.dev_param_row {
    border-color: #484b4e;
}

.dev_const_params {
    border-right-color: #484b4e;
    background-color: #282b2f;
}

.dev_param_checkbox {
    background-color: #373b3e;
}

.dev_req_result {
    background-color: #373b3e;
}

.dev_req_result.has_res:hover {
    background-color: #494e52;
}

.dev_result_key {
    color: #fff;
}

.dev_result_num {
    color: #ae81ff;
}

.dev_result_str, .dev_result_str a {
    color: #a6e22e;
}

.dev_result_bracket {
    color: #66d9ef;
}

.dev_result_highlight .dev_result_bracket, .dev_result_highlight .dev_result_lbracket {
    color: #b92659;
}

#dev_edit_form {
    background-color: #373b3e;
}

.dev_method_req_table {
    border-color: #484b4e;
}

.dev_form_no_params {
    color: #fff;
}

.dev_widget_fulldoc {
    background-color: #494d50;
}

.dev_widget_fulldoc:hover {
    background-color: #6b7175;
    text-decoration: none;
}

.separator, .separator div {
    border-color: #484b4e !important;
}

.wauth_content {
    border-color: #484b4e;
}

#page_wrap {
    background-color: #282b2f;
}

.dev_mlist_item.nav_selected, .dev_mlist_item.nav_selected:hover {
    background: #6f7579;
    color: #c1cddb;
}

.ui_search {
    border-bottom-color: #484b4e;
    background-color: #373b3e;
}

#ads_left:empty + .left_menu_nav_wrap {
    border-top-color: #484b4e;
}

.page_status_editor .editor {
    border-color: #484b4e;
    background-color: #373b3e;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .7);
}

#visitors_graph > div:nth-child(1) > canvas {
    -webkit-filter: brightness(10);
    filter: brightness(10);
}

#visitors_graph {
    color: #fff !important;
}

#sex_age_chart_graph > div:nth-child(1) > canvas {
    -webkit-filter: brightness(10);
    filter: brightness(10);
}

#members_graph > div:nth-child(1) > canvas {
    -webkit-filter: brightness(10);
    filter: brightness(10);
}

#members_graph {
    color: #fff !important;
}

.graph_menu_item {
    color: #fff;
}

.audio_row .audio_duration_wrap {
    -webkit-filter: brightness(1.5) grayscale(0.2);
    filter: brightness(1.5) grayscale(0.2);
}

.audio_inline_player .slider .slider_back, .audio_page_player .slider .slider_back {
    background-color: #b3bfce;
}

.page_block .im_stickers_bl_wrap {
    background: #373b3e;
}

#ads_left {
    display: none !important;
}

#ads_page {
    background-color: #373b3e;
}

.exchange_title_head {
    border-bottom-color: #484b4e;
}

.exchange_subtab1 {
    color: #fff;
}

.exchange_subtab1:hover {
    background-color: #494d50;
}

#ads_page_bottom_info {
    border-top-color: #484b4e;
    background-color: #373b3e;
    color: #a0a0a0;
}

.exchange_table th {
    background-color: #484b4e;
    color: #fff;
}

.exchange_not_found.table {
    background-color: #373b3e;
}

.exchange_post_info_row .label {
    color: #a0a0a0;
}

.exchange_table tr:first-child {
    border-top-color: #484b4e;
}

.exchange_table tr:last-child {
    border-bottom-color: #484b4e;
}

.dark_box_cont {
    background-color: #373b3e;
}

.dark_box_label {
    color: #fff;
}

.exchange_hint_tt .hint_wrap {
    color: #fff;
}

.exchange_hint_tt .tail {
    background: url(https://habrastorage.org/web/6f8/e31/40e/6f8e3140e9f548db9c3b9cea95cd7c45.png) -3px -5px no-repeat;
}

.exchange_table tr {
    border-left-color: #484b4e;
    border-right-color: #484b4e;
}

.exchange_table tr.even {
    background-color: #484b4e;
}

.exchange_ad_post_club_commment, a.exchange_ad_post_link, a.exchange_ad_post_stats {
    background-color: #63676b;
}

.exchange_ad_post_club_commment:hover, a.exchange_ad_post_link:hover, a.exchange_ad_post_stats:hover {
    background-color: #75797d;
}

#exchange_comm_search_filters {
    background-color: #373b3e;
}

.exchange_filter_label {
    color: #98a6b1;
}

#exchange_comm_search_filters #exchange_search_input {
    background: #373b3e;
}

#ads_unions_content h2 {
    border-bottom-color: #484b4e;
}

#admin_form_table_wrapper {
    background-color: #373b3e !important;
    border-top-color: #484b4e !important;
    border-bottom-color: #484b4e !important;
}

#ads_user_link {
    background: #373b3e !important;
}

.wk_sub_sub_header {
    color: #c1cddb;
}

.ui_table tr.ui_table_row.header {
    border-color: #484b4e;
    background-color: #484b4e;
}

.ui_table.wide td.ui_table_cell.right_wide, .ui_table.wide th.ui_table_cell.right_wide, .ui_table.wide td.ui_table_cell.left_wide, .ui_table.wide th.ui_table_cell.left_wide {
    color: #fff;
}

.ui_table td.ui_table_cell_empty {
    background-color: #373b3e;
}

.ui_table tr.ui_table_row.empty {
    border-bottom-color: #484b4e;
}

.ui_table tr.ui_table_row {
    border-left-color: #484b4e;
    border-right-color: #484b4e;
}

.ads_edit_page_wrap3 {
    background-color: #373b3e;
}

.ads_edit_link_type_item .ads_edit_link_type_item_title, .ads_edit_link_type_item.disabled .ads_edit_link_type_item_title, .ads_edit_link_type_item.disabled:hover .ads_edit_link_type_item_title {
    color: #fff;
}

.ads_edit_value_header {
    color: #c1cddb;
}

.ads_edit_link_type_item:hover {
    background-color: #494d50;
}

.big.with_icons .result_list ul li.active {
    background-color: #494d50;
}

.big.with_icons .result_list ul li {
    color: #fff;
}

.ads_edit_separator_big {
    border-bottom-color: #484b4e;
}

.ads_edit_label {
    color: #fff;
}

.ads_edit_targeting_group_hider_title {
    color: #fff;
}

#ads_edit_audience {
    background-color: #494d50;
}

#ads_edit_audience_title, #ads_edit_recommended_cost_title {
    color: #c1cddb;
}

.ads_ad_box.redesign .ads_ad_box_border {
    border-color: #494d50;
}

.ads_edit_panel_preview .ads_ad_box.redesign .ads_ad_box_border {
    background-color: #494d50;
}

.ads_ad_box.redesign .ads_ad_title_box {
    color: #fff;
}

.ads_edit_panel_preview .ads_ad_box .ads_ad_box_border {
    background-color: #373b3e;
}

.selector_container td.selector .token_inner, .selector_container td.selector .token_prefix {
    color: #fff;
    background-color: #494d50;
}

.im-search--date-input .cal_table .past_day.day, .im-search--date-input .cal_table .today.day {
    color: #fff;
}

.nim-dialog .nim-dialog--preview, .nim-dialog .nim-dialog--preview b {
    color: #808080;
}

.im-chat-input .im-chat-input--text * {
    color: #fff !important;
}

.emoji_tt_wrap.tt_up:after {
    border-bottom-color: #373b3e;
}

.emoji_tt_wrap.tt_up:before {
    border-bottom-color: #484b4e;
}

.ui_actions_menu_item.feed_new_list:hover {
    background-color: #494D50;
}

.fans_fan_ph.online.mobile:after {
    background-color: #373b3e;
}

.fans_fan_ph.online:after {
    border-color: #373b3e;
}

.nim-dialog.nim-dialog_unread-out.nim-dialog_muted:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread, .nim-dialog.nim-dialog_unread-out:not(.nim-dialog_failed) .nim-dialog--unread {
    background-color: #f05c44;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_muted.nim-dialog_selected .nim-dialog--unread, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected .nim-dialog--unread {
    background-color: #fff !important;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview, .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview {
    color: #fff;
}

.current_audio_cnt {
    opacity: 1;
    color: #849ebd;
    -webkit-filter: brightness(1.5) grayscale(0.2);
    filter: brightness(1.5) grayscale(0.2);
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview {
    color: #fff;
}

.post_like:hover, .post_share:hover {
    color: #fff;
}

.pva_period_fixed {
    background-color: #373B3E;
}

.im-chat-input.im-chat-input_error {
    background-color: #373b3e;
}

.im-page.im-page_classic .im-page--history_loading, .im-create.im-create_classic .im-create--table {
    box-shadow: 0 1px 0 0 #484B4E, 0 0 0 1px #484B4E;
}

.ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_bottom, .ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_top {
    background: url(https://habrastorage.org/web/2fb/fc1/c58/2fbfc1c586b54b4f81165d57b27df4f1.png) 0 -29px;
}

.idd_wrap .idd_selected_value {
    color: #D2D2D2;
}

.help_table_not_found_text {
    color: #fff;
}

.help_table_not_found_text__l {
    color: #b7b7b7;
}

.help_table_popular {
    border-top-color: #484b4e;
}

.my_like {
    color: #fff !important;
}

.videocat_channel_header .videocat_channel_title a {
    color: #fff;
}

.ui_actions_menu_item.feed_custom_list:hover {
    background-color: #494d50;
}

.im-to-end .im-to-end--label {
    border-color: #484b4e;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);
    background-color: #373b3e;
}

.im-to-end {
    color: #fff;
}

.im-to-end:hover .im-to-end--label {
    background-color: #494d50;
}

.im-page .im-page--top-date-bar:before {
    background-color: #373b3e;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered:last-child, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected:last-child, .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic:last-child, .nim-dialog:not(.nim-dialog_deleted):hover:last-child {
    border-bottom-color: #484b4e;
}

input.ui_search_field {
    background: url(https://habrastorage.org/web/d74/a87/660/d74a876607894351a1b5fec8f4aae01b.png) no-repeat;
    -ms-high-contrast-adjust: auto;
    padding-left: 28px;
    border-left: 20px solid transparent;
    background-position: 0;
}

.im-audio-message-input {
    border-top-color: #484b4e;
}

.im-audio-message-input .im-audio-message-track {
    background-color: #494d50;
}

.im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover {
    background-color: #565b5f;
}

.blog_entry_author_name, .blog_entry_author_name a {
    color: #c1cddb;
}

.payments_money_transfer_amount_wrap {
    border-color: #494d50;
    background-color: #373b3e;
}

.payments_money_transfer_comment {
    border-color: #494d50;
    background-color: #373b3e;
}

.payments_money_transfer_amount_wrap.money_error {
    border-color: #f05c44;
    background-color: #4f5458;
}

.payments_money_transfer_amount_wrap.money_error .payments_money_transfer_amount {
    background-color: #4f5458;
}

.pay-card-layout__notification_type_vk .info-block_type_notification, .pay-card-layout__notification_type_vk-p2p .info-block_type_notification {
    color: #fff;
    background-color: #373b3e;
}

.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview.nim-dialog--preview-attach {
    color: #c3c3c3;
}

.ui_toggler {
    background-color: #6b7277;
}

.ui_toggler:after {
    border-color: #6b7277;
    background-color: #fff;
}

.ui_toggler.on {
    background-color: #efbfb7;
}

.ui_toggler.on:after {
    background-color: #f05c44;
    border-color: #f05c44;
}

.login_page #footer_wrap {
    border-top-color: #484b4e;
}

.im-page_classic .im-page--top-notice {
    box-shadow: 0 1px 0 0 #494d50, 0 0 0 1px #494d50;
    background-color: #373b3e;
}

.im-page .im-page--dialogs.im-page--dialogs-notice .im-page--header {
    background-color: #282b2f;
}

.im-notice--title {
    color: #fff;
}

.im-page_classic .im-page--top-notice .im-notice--text {
    color: #E0E0E0;
}

.landing .landing_section.dark {
    background-color: #282B2F;
}

.landing .landing_section .landing_page_title {
    color: #C1CDDB;
}

.landing_moneysend .landing_page_text {
    color: #e0e0e0;
}

.landing .landing_section {
    border-bottom-color: #474b4e;
}

.landing_moneysend_mastercard_block, .landing_moneysend_when {
    color: #e0e0e0;
}

#header {
    background: #373b3e;
    border-color: #484b4e;
}

#header_wrap1 {
    border-color: #484b4e;
}

.smartfeed_notification .notification_info .notification_title {
    color: #fff;
}

.blog_more_but {
    color: #8EC5FF;
}

.blog_entry_author_info_short, .blog_entry_author_info_short a {
    color: #afafaf;
}

#pv_friends {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    background: #373b3e;
    border-color: #484b4e;
}

#pv_friends .name_input input {
    border-color: #484b4e;
}

#pv_friends .list_wrap a:hover {
    background-color: #494d50;
}

.im-page .im-page--header-inner {
    background: #373b3e;
    border-bottom-color: #484b4e;
}

.im-page .im-page--top-date-bar {
    background: #373b3e;
    border-color: #484b4e;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .6);
}

html body .vkd-filterblock-title {
    color: #fff;
}

.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text {
    background-color: #494d50;
}

.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text {
    background-color: #494d50;
}

.im-page .im-page--history-new-bar_days > span:before {
    border-color: #494d50;
}

.im-page .im-page--top-date-bar.im-page--date-bar-transition.im-page--date-bar-transition-inverse {
    background-color: #373b3e;
    border-color: #494d50;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .6);
}

.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_selected.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_selected.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out .nim-dialog--inner-text, .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text {
    background-color: #494d50;
}

html body #ads_left:not(.vkd-enabled) + .left_menu_nav_wrap {
    border-top-color: #484b4e;
}

.medadd_c_linkhead {
    color: #c1cddb;
}

.medadd_c_linkdsc {
    color: #b9b9b9;
}

.group_app_button {
    border-top-color: #484b4e;
}

a.ui_crumb {
    color: #b3b3b3;
}

.wide_column .page_top {
    border-bottom-color: #484b4e;
}

.group_friends_image {
    border-color: #373b3e;
}

.public_help_block {
    color: #fff;
}

#group_apps_wrapper .ui_tabs_header {
    background-color: #373b3e;
}

#group_apps_wrapper #apps_catalog .apps_catalog_row {
    border-bottom-color: #484b4e;
}

a.group_app_button {
    color: #fff;
}

.emoji_cats_title_helper:after {
    background: url(https://habrastorage.org/web/2fb/fc1/c58/2fbfc1c586b54b4f81165d57b27df4f1.png) 0 -29px;
}

.emoji_cat_title {
    color: #fff;
    background-color: #373b3e;
}

.ui_search_new .ui_search_input_inner {
    border-color: #494d50;
}

.ui_search_new .ui_search_button_search {
    background-color: #494d50;
    border-color: #494d50;
}

.ui_search_new.ui_search_field_empty .ui_search_button_search {
    background-color: #494d50;
}

.ui_search_sugg_list {
    border-color: #494d50;
    border-top-color: #494d50;
    background-color: #373b3e;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
}

.ui_search_sugg_list .ui_search_suggestion_selected {
    background-color: #494d50;
}

.ui_search_new.ui_search_dark .ui_search_input_inner {
    background-color: #373b3e;
}

.eltt.eltt_bottom:before {
    border-bottom-color: #484b4e;
}

.ui_search_new .ui_search_button_search:hover {
    background-color: #63676b;
}

.ui_search_new.ui_search_dark .ui_search_button_search {
    background-color: #494d50;
}

.feed_wrap .explain {
    color: #adadad;
}

h4.profile_online {
    color: #BBE6AC;
}

.im-chat-input {
    border-top-color: #494d50;
    background-color: #373b3e;
}

.im-chat-input .im-chat-input--txt-wrap {
    background-color: #373b3e;
    border-color: #494d50;
}

.im-fwd .im-fwd--title {
    color: #c1cddb;
}

.im-fwd.im-fwd_msg .im-fwd--messages {
    color: #fff;
}

.im-audio-message-input {
    background-color: #373b3e;
    border-top-color: #484b4e;
}

#group_apps_wrapper .apps_footer {
    background-color: #373b3e;
    border-top-color: #484b4e;
}

.app_settings_name a {
    color: #c1cddb;
}

#group_apps_wrapper #group_apps_edit .app_setting_header .group_edit_app_info .apps_settings_go_link {
    color: #fff;
}

#apps_catalog .apps_catalog_row {
    border-bottom-color: #484b4e;
}

.im-right-menu.ui_rmenu .im-right-menu--count {
    color: #fff;
    background: #f05c44;
    border-radius: 3px;
}

.feed_update_row .post_author {
    color: #a0a0a0;
}

.help_table_question_visible.help_table_question_sa {
    background-color: #373b3e;
}

body.dev a.dev_search_match_row {
    color: #fff;
}

.dev_search_header {
    color: #c1cddb;
}

.dev_search_match_row:hover {
    background: #494d50;
    border-radius: 3px;
}

.dev_products_block_descr {
    color: #fff;
}

.dev_products_blocks_spliter:after {
    background-color: #494d50;
}

.dev_widgets_row {
    border-top-color: #494d50;
}

body.dev .paginated_table_header th.paginated_table_cell {
    background-color: #494d50;
}

body.dev .paginated_table_header th.paginated_table_cell.unsortable:hover, body.dev .paginated_table_header th.paginated_table_cell:hover {
    background-color: #595d61;
}

body.dev .paginated_table_header .paginated_table_cell, body.dev .paginated_table_header .paginated_table_cell * {
    color: #fff;
}

.dev_status_okay {
    color: #f05c44;
}

body.dev .paginated_table_row {
    border-bottom-color: #494d50;
}

.summary_tabs {
    border-bottom-color: #494d50;
}

#wrapper_delay_graph, #wrapper_uptime_graph {
    color: #dedede !important;
}

#wrapper_delay_graph > div:nth-child(1) > canvas, #wrapper_uptime_graph > div:nth-child(1) > canvas {
    -webkit-filter: brightness(10);
    filter: brightness(10);
}

.dev_roadmap_timeline {
    color: #c1cddb;
}

.dev_roadmap_timeline .dev_roadmap_timeline_row .dev_roadmap_timeline_row_text a {
    color: #c1cddb;
}

.dev_main_featured .dev_main_featured_products .dev_main_featured_product .dev_main_featured_product_title {
    color: #fff;
}

.dev_main_featured .dev_main_featured_products .dev_main_featured_product:hover .dev_main_featured_product_title, .dev_main_platforms .dev_main_platform:hover .dev_main_platform_title {
    color: #c1cddb;
}

.dev_main_sep {
    background-color: #484b4e;
}

.dev_main_content .dev_main_content_header, .dev_main_platforms .dev_main_platform .dev_main_platform_title {
    color: #fff;
}

.dev_main_content .dev_main_content_breaker {
    border-bottom-color: #484b4e;
}

.dev_main_footer .dev_main_footer_section .dev_main_footer_section_title {
    color: #6e8fb0;
}

.dev_main_blog_post_more {
    color: #fff;
    margin-top: 0px;
}

.wide .dev_req_result.has_res:hover {
    background-color: #494d50;
}

.dev_result_highlight .dev_result_block .dev_result_bracket, .dev_result_highlight .dev_result_block .dev_result_lbracket {
    color: #fff;
}

body.is_page {
    background-color: #282B2F;
}

.landing_desktop_messenger_description {
    color: #fff;
}

.landing_desktop_messenger_tools .landing_desktop_messenger_tool .tool_title {
    color: #fff;
}

.landing_desktop_messenger_tools .landing_desktop_messenger_tool .tool_caption {
    color: #ababab;
}

.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after, .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after {
    background-color: #494D50;
    border-color: #494D50;
}

.feed_row ~ .feed_row_fb_hidden .feed_row:first-child .feedback_row {
    border-top-color: #5a5f63;
}

.im-create.im-create_classic .im-create--footer {
    background-color: #373b3e;
}

.im-create .im-creation--item.im-creation--item_hovered, .im-create .im-creation--item:hover {
    border-top-color: #494d50;
    background-color: #494d50;
}

.im-chat-input .eltt.page_video_autoplay_tt {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.39);
    border-color: #494d50;
}

.composer_wdd .wdd_list {
    border-color: #494d50;
}

.wdd_list {
    border-color: #494d50;
}

.wddi_over .wddi_sub {
    color: #A5A5A5;
}

.like_tt_bottom_page_friend_reply {
    background-color: #373b3e !important;
}

.page_friend_reply {
    border-bottom-color: #484b4e;
}

.feed_groups_hidden_list_show_btn {
    color: #fff;
    background-color: #494d50;
}

.feed_groups_hidden_list_show_btn:hover {
    background-color: #6786ab;
}

.im-page.im-page_classic .im-chat-history-resize {
    background-color: #282b2f;
}

#side_bar_inner {
    position: fixed !important;
    margin-left: 0px !important;
    margin-top: 42px !important;
    top: 0px !important;
}

.wall_module .reply {
    background: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
}

._wall_post_cont {
    background: transparent !important;
}

.tt_w.tt_black {
    background: rgba(0, 0, 0, .7) !important;
}

.tickets_post_form__panel {
    border-top-color: #484b4e;
}

.tickets_post_field {
    background-color: #373b3e;
    border-top-color: #484b4e;
}

#marketplace .market_content .link {
    color: #c1cddb;
}

#marketplace .market_content .market_row.over {
    background-color: #494d50;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.12);
}

#marketplace .market_content .market_row .market_edit_actions {
    background-color: rgb(73, 77, 80);
}

.market_item_footer_info {
    border-bottom-color: #494d50;
}

.market_edit_item_box .result_list li.disabled {
    border-top-color: #484b4e;
}

.nim-peer.nim-peer_smaller.online:after {
    border-color: #373b3e;
}

.im-page--chat-header-in {
    border-bottom-color: #484b4e;
}

.im-page--toolsw {
    background-color: #373b3e;
}

.im-page--title-main-in {
    color: #fff;
}

.im-page_classic .im-page--chat-header {
    border-color: #282b2f;
    border-top-color: #282b2f;
    border-left-color: #282b2f;
}

.im-page_classic .im-page--chat-header-in {
    box-shadow: 0 0 0 1px #494d50;
}

.dev_page_cont .wk_header.dev_wk_head_bordered {
    border-bottom-color: #484b4e;
}

.wcm_chat {
    background-color: #373b3e;
}

.wcm_send_form {
    background-color: #373b3e;
    border-top-color: #494d50;
}

.wcm_msg_wrap_unread {
    background-color: #494d50;
}

.wcm_msg {
    background-color: #537496;
}

.im-page--back-btn:hover {
    background-color: #494d50;
}

.bt_report_sidebar_wrap {
    background-color: #373b3e;
}

.bt_report_title_link {
    color: #fff;
}

.bt_report_row {
    border-bottom-color: #484b4e;
}

.bt_tag_label {
    background-color: #484b4e;
    color: #b5b5b5;
}

.bt_tag_label.bt_tag_label_dark {
    background-color: #484b4e;
}

.bt_report_tags .bt_tag_label:hover {
    background-color: #65696d;
}

.bt_report_tags .bt_tag_label.bt_tag_label_dark:hover {
    background-color: #65696d;
}

.vk2017_snippet {
    background-color: #494d50;
    border: 1px solid rgba(255, 255, 255, 0.12);
}

.landing_vk2017_title {
    color: #C1CDDB;
}

.landing_vk2017_caption {
    color: #fff;
}

.landing_vk2017_promise_name a {
    color: #C1CDDB;
}

.landing_vk2017_total {
    color: #c1cddb;
}

.landing_vk2017_form_info {
    color: #fff;
}

#vk2017_info > a {
    color: #8EC5FF;
}

.mott_header, .promoted_post_tt .header, .verified_tt_header, .wall_tt .header {
    color: #fff;
}

.tt_default.verified_tt.tt_down:after {
    border-top-color: #373b3e;
}

.tt_default.verified_tt.tt_down:before {
    border-top-color: #484b4e;
}

.im-page--title-main-inner {
    color: #fff;
}

.eltt.eltt_bottom.top_audio_layer:after {
    border-bottom-color: #373b3e;
}

.im-page--chat-header {
    background-color: #373b3e;
}

.im-page--toolsw {
    border-bottom-color: #484b4e;
    background-color: #373b3e;
}

.im-page--back-btn:hover {
    background: url(https://habrastorage.org/web/80b/ca6/16b/80bca616b72943b8b5432ab782bb011c.png) 13px 16px no-repeat, linear-gradient(90deg, #494d50 50%, #494d50);
    background: url(https://habrastorage.org/web/80b/ca6/16b/80bca616b72943b8b5432ab782bb011c.png) 13px 16px no-repeat, -o-linear-gradient(90deg, #494d50 50%, #494d50);
}

a.ui_box_header_link {
    color: #fff;
}

.wall_module .my_like .post_like_icon, .wall_module .my_share .post_share_icon {
    -webkit-filter: contrast(2.4) hue-rotate(127deg) !important;
    filter: contrast(2.4) hue-rotate(127deg) !important;
}

.wall_module .my_like .like_icon, .wall_module .my_share .share_icon {
    -webkit-filter: contrast(2.4) hue-rotate(127deg) !important;
    filter: contrast(2.4) hue-rotate(127deg) !important;
}

.pv_liked .pv_like_icon {
    -webkit-filter: contrast(2.4) hue-rotate(127deg) !important;
    filter: contrast(2.4) hue-rotate(127deg) !important;
}

.post_like_icon, .post_reply_icon, .post_share_icon {
    -webkit-filter: brightness(2) !important;
    filter: brightness(2) !important;
}

.post_upload_dropbox_inner {
    border-color: #494d50;
}

.post_upload_dropbox {
    background-color: #373b3e;
    color: #fff;
}

.post_upload_dropbox.dropbox_over .post_upload_dropbox_inner {
    background-color: #494d50;
}

.right_list_field.right_list_field__common_text {
    color: #c1cddb;
}

.medadd_c_linkimg_big .medadd_c_linkhead {
    color: #fff;
}

.mv_subscribe_block .mv_subscribe_live_btn {
    border-left-color: #373b3e;
}

.settings_privacy_row {
    border-color: #494d50;
}

.post_author span.author {
    color: #C4D1DE;
}

.post_like, .post_reply, .post_share {
    color: #C4D1DE;
}

.wall_module .post_like:hover, .wall_module .post_reply:hover, .wall_module .post_share:hover {
    background-color: #494d50;
}

.post_like:hover, .post_reply:hover, .post_share:hover {
    color: #ffffff;
}

.shorten_list_row {
    background-color: #373b3e;
    border-bottom-color: #484b4e;
}

.im-page .im-page--chat-search-empty {
    background: url(https://habrastorage.org/web/6f4/51e/a60/6f451ea606d24b528336b89ec8aa2b98.png) no-repeat top;
    color: #909090;
}

.shortener_stats_header {
    border-bottom-color: #484b4e;
}

div.ui_actions_menu_wrap._ui_menu_wrap.shown > div.ui_actions_menu._ui_menu > a {
    color: #fff;
}

#pv_tags span {
    color: #fff;
}

.wl_post_actions_wrap .ui_actions_menu_more {
    color: #eaeaea;
}

.wall_module.wl_post .reply .reply_wrap {
    border-top-color: #484b4e;
}

.feed_blog_reminder_title a {
    color: #c1cddb;
}

.wl_replies_header.wl_replies_header_clickable {
    color: #E4E6E9;
}

.bt_comment_form {
    background-color: #373b3e;
}

.bt_sb_block {
    border-top-color: #484b4e;
    color: #dedede;
}

.bt_report_cmt_author_a {
    color: #c1cddb;
}

.wall_module .post_like_count, .wall_module .post_like_link, .wall_module .post_reply_count, .wall_module .post_reply_link, .wall_module .post_share_count, .wall_module .post_share_link {
    color: #fff;
}

.video_desktop_live_intro_wrap {
    background-color: #373b3e;
}

.mv_live_gifts_block {
    border-bottom-color: #484b4e;
}

.mv_live_gifts_arrow_left:before, .mv_live_gifts_arrow_right:before {
    background-color: #373b3e;
}

.mv_live_gifts_arrow_left:hover:before, .mv_live_gifts_arrow_right:hover:before {
    background-image: -o-linear-gradient(90deg, #494D50, #494D50);
    background-image: linear-gradient(0deg, #494D50, #494D50);
}

.mv_live_gifts_arrow_right {
    border-left-color: #484b4e;
}

.mv_live_gifts_supercomment {
    border-left-color: #484b4e;
    color: #fff;
}

.mv_live_gifts_supercomment:hover {
    background-color: #494d50;
}

.mv_live_gifts_item:hover {
    background-color: #494d50;
}

.mv_live_gifts_arrow_left {
    border-right-color: #484b4e;
}

.eltt.feature_intro_tt.eltt_top:before, .eltt.feature_intro_tt.eltt_top:after {
    background-color: #373b3e;
}

.mv_live_gifts_item.active {
    background-color: #484b4e;
}

.im-mess .im-mess--post {
    border-left-color: #484B4E;
}

.mv_live_gifts_supercomment.active {
    background-color: #484b4e;
}

.mv_live_gift_popup_description {
    color: #fff;
}

.im-page .im-page--clear-recent {
    color: #fff;
}

.settings_history_table tr td {
    border-bottom-color: #484b4e;
}

.settings_votes_income .settings_history_amount {
    color: #939393;
}

.gtop_complex_message .gtop_content .gtop_header {
    color: #c1cddb;
}

.gtop_complex_message .gtop_content .gtop_message {
    color: #fff;
}

.good_browser:hover {
    background-color: #494d50;
}

#dev_left_nav, .dev_section_methods_wrap {
    background-color: #373b3e;
    box-shadow: 0 1px 0 0 #484b4e, 0 0 0 1px #484b4e;
}

.dev_section_methods_wrap .dev_section_search_wrap {
    border-bottom-color: #484b4e;
}

.dev_section_methods_wrap .dev_section_search_input:hover {
    background-color: #494d50;
}

.dev_section_methods_wrap .dev_section_search_result_wrap {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .6);
    border-color: #484b4e;
    background-color: #373b3e;
}

.dev_section_methods_wrap .dev_section_search_result_item {
    color: #fff;
}

.dev_section_methods_wrap .dev_section_search_result_item.over {
    background-color: #494d50;
}

.dev_section_methods_wrap .dev_section_search_input:focus {
    color: #fff;
    background-color: #494d50;
}

.dev_method_block .dev_method_block_title {
    border-bottom-color: #484b4e;
}

.group_api_blockquote {
    background-color: #494d50;
}

.dev_row_separator {
    border-bottom-color: #494d50;
    box-shadow: 0 1px 0 0 #494d50;
}

.group_help_desc {
    color: #bfbfbf;
}

.medadd_inline_editable:hover {
    background-color: #494d50;
}

#profile_groups_link:hover {
    background-color: #494d50;
}

.audio_section_promo__title {
    color: #fff;
}

.audio_page_layout .audio_item__title, .audio_page_layout .audio_item__title > a {
    color: #fff;
}

.audio_page_layout .audio_friends_list {
    background-color: #373b3e;
}

.audio_row:not(.audio_row_current):hover .audio_row_inner {
    background-color: #494d50;
}

.audio_page_layout .audio_page_separator {
    background-color: #484b4e;
}

.audio_page_layout .has_friends_block .audio_page__rows_wrap {
    border-right-color: #484b4e;
}

.audio_row.audio_row_current .audio_row_inner, .audio_row.audio_row_playing .audio_row_inner, .audio_row.audio_row_current .audio_row_inner:hover, .audio_row.audio_row_playing .audio_row_inner:hover {
    background-color: #494d50;
}

.audio_row.audio_row_current .audio_row_inner, .audio_row.audio_row_playing .audio_row_inner, .audio_row.audio_row_current .audio_row_inner:hover, .audio_row.audio_row_playing .audio_row_inner:hover {
    background-color: #494d50;
}

.audio_page_player.audio_page_player_fixed {
    background-color: #373b3e;
    box-shadow: 0 1px 0 0 rgb(73, 77, 80);
}

.audio_page_layout .audio_recoms_blocks .recoms_special_block_title, .audio_page_layout .audio_section__recoms .recoms_special_block_title {
    color: #fff;
}

.audio_feed_post {
    border-bottom-color: #484b4e;
}

.ui_tab, .ui_tabs .ui_tab {
    color: #b9b9b9;
}

.eltt.eltt_bottom.eltt_arrow_size_normal .eltt_arrow_back {
    border-bottom-color: #494d50;
}

.eltt.eltt_bottom.eltt_arrow_size_normal .eltt_arrow {
    border-bottom-color: #373b3e;
}

#audio_status_tt .audio_status_sep {
    background-color: #494d50;
}

.audio_layer_container .audio_page_player {
    background-color: #373b3e;
    border-bottom-color: #494d50;
}

.audio_layer_container .audio_page__footer {
    border-top-color: #494d50;
}

#audio_layer_tt > .eltt_arrow_back .eltt_arrow {
    border-bottom-color: #373b3e;
}

.audio_pl_edit_box .ape_header {
    background-color: #373b3e;
    border-bottom-color: #484b4e;
}

.audio_pl_edit_box .ape_add_audios_btn, .audio_pl_edit_box .ape_add_pl_audios_btn {
    border-bottom-color: #484b4e;
}

.audio_pl_edit_box .ape_add_audios_btn:hover, .audio_pl_edit_box .ape_add_pl_audios_btn:hover {
    background-color: #494d50;
}

.audio_pl_edit_box .ape_list_header {
    color: #fff;
    background-color: #373b3e;
}

.story_feed_new_item .stories_feed_item_ava {
    border-color: #fff;
}

.story_feed_new_item .stories_feed_item_name {
    color: #fff;
}

.feed_blog_reminder_large .feed_blog_reminder_text {
    color: #adadad;
}

.feed_blog_reminder_large .feed_blog_reminder_title {
    color: #fff;
}

.feed_blog_reminder_link {
    color: #fff;
}

.audio_layer_container .audio_friend:hover {
    background-color: #494d50;
}

.audio_pl_snippet .audio_pl_snippet__header {
    background-color: #494d50;
    border-bottom-color: #5f6265;
}

.audio_pl_snippet {
    border-color: #5f6265;
    background-color: #373b3e;
}

.audio_pl_snippet .audio_pl_snippet__more_btn {
    color: #c1cddb;
}

.audio_pl_snippet .audio_pl_snippet__info_title {
    color: #fff;
}

.audio_pl_snippet .audio_pl_snippet__info_author > a {
    color: #a9a9a9;
}

.audio_pl_snippet .audio_pl_snippet__info_line {
    color: #a9a9a9;
}

.story_view_answer_form_cont {
    background: #373b3e;
    border: 1px solid #5f6265;
}

.story_view_feedback_button_arrow {
    background: none;
}

.stories_feed_arrow_left, .stories_feed_arrow_right {
    border-color: rgb(72, 75, 78);
    background-color: #373b3e;
}

.stories_feed_arrow_left:hover, .stories_feed_arrow_right:hover {
    background: -o-linear-gradient(bottom, #373b3e, #494d50, #373b3e);
    background: linear-gradient(0deg, #373b3e, #494d50, #373b3e);
}

.audio_page_player .audio_page_player__cover {
    background-color: #282b2f;
}

.audio_pl_item .audio_pl__cover {
    background-color: #282b2f;
}

.stories_feed_item_name {
    color: #c1cddb;
}

.wdd_add3 {
    color: #fff;
}

.wdd_add_plus {
    -webkit-filter: brightness(5);
    filter: brightness(5);
}

.tt_default_right.tt_up:before {
    border-bottom-color: #484b4e;
}

.tt_default_right.tt_up:after {
    border-bottom-color: #373b3e;
}

.eltt.eltt_top.eltt_arrow_size_normal .eltt_arrow_back {
    border-top-color: #484b4e;
}

.eltt.eltt_top.eltt_arrow_size_normal .eltt_arrow {
    border-top-color: #373b3e;
}

.im-page .im-page--top-date-bar_visible .im-page--history-new-bar_days.im-page--date-bar-transition > span {
    border-color: #484b4e;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3);
}

.audio_pl_edit_box .ape_audio_item_wrap .ape_attach {
    color: #fff;
}

.audio_pl_edit_box .ape_pl_item .ape_pl_item_inner {
    border-bottom-color: #484b4e;
}

.audio_pl_edit_box .ape_pl_item:hover {
    background-color: #494d50;
    border-top-color: #494d50;
    border-bottom-color: #494d50;
}

.ok_msg {
    background-color: #484b4e;
}

.video_upload_tc_wrap .video_tc_upload_btn {
    background-color: #484b4e;
    color: #fff;
}

.video_upload_tc_wrap .video_tc_item {
    background-color: #373b3e;
}

.video_upload_tc_wrap .video_tc_upload_btn:hover {
    background-color: #575b5f;
}

.video_upload_tc_wrap .video_tc_item:hover {
    background-color: #373b3e;
}

#video_playlists_edit_box .pl_size {
    color: #fff;
}

.videos_edit_main_album_description {
    color: #fff;
}

.video_item .video_restore {
    background-color: hsla(210, 4%, 29%, 0.6);
}

.video_upload_link_header {
    color: #c1cddb;
}

#mv_publish {
    background-color: #373b3e;
    border-bottom-color: #484b4e;
}

.audio_pl_snippet .audio_pl_snippet__description {
    color: #fff;
}

.bottom_row {
    border-top-color: #484b4e;
    background-color: #373b3e;
}

.post_friend_liked {
    border-color: #373b3e;
}

.post_top_info_wall_reply {
    box-shadow: 0 0 0 1px #484b4e, 0 1px 0 0 #484b4e;
}

.post_top_info_wall_reply_text, .post_top_info_wall_like_text {
    color: #fff;
}

.login_bad_link_header {
    color: #fff;
}

#mv_pl_tt .mv_tt_playlists.with_border {
    border-top: 1px solid #484b4e;
}

.flat_button {
    color: #fff !important;
}

.app_widget_matches {
    color: #fff;
}

.app_widget_matches_score, .app_widget_matches_team_a, .app_widget_matches_team_b {
    border-top-color: #494d50;
}

.audio_row:hover:not(.audio_row__current) .audio_row_content {
    background-color: #494d50;
}

._audio_section__search .audio_row.audio_has_lyrics .audio_row__title_inner, .ap_layer__content .audio_row.audio_has_lyrics .audio_row__title_inner, .audio_page__audio_rows .audio_row.audio_has_lyrics .audio_row__title_inner, .audio_section_global_search__audios_block .audio_row.audio_has_lyrics .audio_row__title_inner {
    color: #8ec5ff;
}

.audio_w_covers .audio_row.ui_gridsorter_moveable .audio_row_content {
    background-color: #494d50;
}

.audio_row .audio_row__lyrics .audio_row__lyrics_inner {
    color: #e2e2e2;
}

.audio_row.audio_row__current .audio_row_content {
    background-color: #494d50;
}

.audio_w_covers .audio_row .audio_row__cover {
    background-image: url(https://habrastorage.org/web/5fc/8e6/47f/5fc8e647fa1147259ef14e18bb6019d1.png);
}

.audio_row__more_actions .audio_row__more_action {
    color: #e2e2e2;
}

.audio_row__more_actions .audio_row__more_action:hover {
    background-color: #494d50;
}

.eltt.eltt_bottom.eltt_arrow_size_normal > .eltt_arrow_back .eltt_arrow {
    border-bottom-color: #373b3e;
}

.audio_row .audio_row__performer {
    color: #8EC5FF;
}

.ap_layer .audio_pl_snippet .audio_pl_snippet__header_inner {
    background-color: #494d50;
}

.audio_pl_snippet .audio_pl_snippet__stats {
    color: #fff;
}

}

@-moz-document url-prefix("https://vk.com/widget_comments"), url-prefix("http://vk.com/widget_comments") {
    .fakeinput, div[contenteditable=true], input.big_text, input.dark, input.search, input.text, textarea {
        background: #fff;
        border-color: #d3d9de;
    }

    .submit_post {
        background: #fafbfc;
        border-top-color: #d3d9de;
    }

    .wall_module .reply_form {
        background-color: #fafbfc;
    }

    .ui_actions_menu_item:hover {
        background-color: #e4eaf0;
    }

    .emoji_tt_wrap.tt_up:before {
        border-bottom-color: #c5d0db;
    }

    .emoji_tt_wrap.tt_up:after {
        border-bottom-color: #fff;
    }

    .ui_scroll_default_theme.ui_scroll_emoji_theme .ui_scroll_shadow_bottom, .ui_scroll_default_theme.ui_scroll_emoji_theme .ui_scroll_shadow_top {
        background: url(https://vk.com/images/emoji_sprite.png?11) 0 -29px;
    }

    .emoji_sprite {
        background-image: url(https://vk.com/images/emoji_sprite.png?11);
    }

    .replies_open, .wr_header {
        color: #55677d;
        background: #f0f2f5;
    }

    .replies_open:hover, .wr_header:hover {
        background-color: #C4D1DE;
    }

    #page_wrap, .wall_module .reply_box, .wall_module .reply_fakebox_wrap {
        background-color: #fff;
    }

    body, .fakeinput, .fakeinput ~ .placeholder .ph_input, div[contenteditable=true], div[contenteditable=true] ~ .placeholder .ph_input, input.big_text, input.big_text ~ .placeholder .ph_input, input.dark, input.dark ~ .placeholder .ph_input, input.search, input.search ~ .placeholder .ph_input, input.text, input.text ~ .placeholder .ph_input, textarea, textarea ~ .placeholder .ph_input {
        color: #000;
    }

    .post_author .author, .wall_module .author, .wall_module .copy_author, a {
        color: #2a5885;
    }

    .ui_actions_menu, .emoji_tt_wrap {
        background-color: #fff;
        border-color: #c5d0db;
    }

    .emoji_bg, .emoji_tabs, .emoji_tabs_l_s, .emoji_tabs_r_s {
        background: #ebeef2;
    }

    .wall_module .reply_fakebox, .emoji_tab_sel, .emoji_tab_sel:hover {
        background: #fff;
    }

`);
