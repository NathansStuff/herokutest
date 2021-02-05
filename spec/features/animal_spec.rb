require 'spec_helper'

describe "GET homepage", :type => :feature do
  it 'loads the homepage' do
    visit('http://127.0.0.1:3000/')
    expect(page.title).to have_content("Cybele")
    puts " Yay, we reached the homepage!! "
  end

  describe "GET searchpage", :type => :feature do
    it 'loads the searchpage' do
      visit('http://127.0.0.1:3000/search')
      find_button ("Add New")
      puts " Yay, we reached the search page!! "
    end
  end


end
