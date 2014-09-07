Botinder.MatchesMatchView = Ember.View.extend({
  refreshScroll: function() {
    var height = window.innerHeight - $('.match .profil').height() - $('.match .write').height();
    
    $('.match .messages').css('height', height + 'px');
  },

  didInsertElement: function() {
    $(window).on('scroll.match', this.refreshScroll);
    $(window).on('resize.match', this.refreshScroll);

    this.refreshScroll();
  },

  willDestroyElement: function() {
    $(window).off('scroll.match');
    $(window).off('resize.match');
  },
});