import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';

app.initializers.add('datlechin/flarum-usercard-uid', () => {
  extend(UserCard.prototype, 'infoItems', function (items) {
    const uid = this.attrs.user.id();
    items.add('uid', app.translator.trans('datlechin-usercard-uid.forum.uid_text', { uid }), 1);
  });
});
