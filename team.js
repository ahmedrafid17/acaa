('.team-members__photo').on('click', function() {
    var $this = (this);
    var member = $this.data('member');
    var memberID = '#' + member;
    var memberParent = $this.parent();

    ('.team-members__member').removeClass('team-members__member--active');
    memberParent.addClass('team-members__member--active'); 
    ('.team-bios__bio').hide();
    (memberID).fadeIn();
});
