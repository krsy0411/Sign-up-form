const root = document.getElementById('root')



template = `
  <div class="container">
    <div class="leading-block">
      <div class="sign-up-form">
        <p class="my-name">LEE's</p>

        <div id="essential">
          <div class="name-fields">
            <div class="flex-text-field">이름</div>
            <input id="name" name="name" value="" type="text" placeholder="이름을 입력해주세요" />
          </div>

          <div class="id-fields">
            <div class="flex-text-field">아이디</div>
            <input id="id" name="id" value="" type="text" placeholder="아이디를 입력해주세요" />
          </div>
          
          <div id="button-container">
            <button id="btn-join" type="submit">회원가입</button>
          </div>
        </div>

        <h1 class="notice">아래 입력된 내용은 절대 사적으로 이용하지 않습니다</h1>
        <p class="additional-text">Additional Information</p>

        <div id="additional">
          <div class="address-fields">
            <div class="address">
              <label class="address-text-box" for="e-mail">집 주소</label>
              <div class="search-address-container">
                <input id="search-address" name="search-address" value="" type="text" placeholder="주소를 검색해주세요" />
              </div>
            </div>

            <div class="detail-address">
              <div class="detail-address-container">
                <input id="detail-address" name="detail-address" value="" type="text" placeholder="상세주소를 입력해주세요" />
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
`;

root.innerHTML = template;