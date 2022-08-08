// 이메일 회원가입 리듀서 함수 모음

// 이름 리듀서 함수.
export const nameReducer = (state, action) => {
        if (action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.trim().length>2 };
        }
        if (action.type === 'INPUT_BLUR') {
            return { value: state.value.trim(), isValid: state.value.trim().length>2 };
        }
        return { value: '', isValid: false };
}

export const emailReducer = (state, action) => {
    if (action.type === 'EMAIL_ERROR') {
        return { ...state, emailValue: action.val, emailValid: '이메일 형식을 맞춰주세요.'}
    }
    if(action.type === 'EMAIL_INCLUDE') {
        if (state.emailChackValue === "") {
            return {...state, emailValue: action.val, emailValid: "good"}
        } else if (action.val === state.emailChackValue) {
            return {...state, emailValue: action.val, emailValid: "good", emailChackValid: 'good'}
        } else {
            return {...state, emailValue: action.val, emailValid: '주소가 일치하지 않습니다.'}
        }
    }
    
    if (action.type === 'EMAIL_BLUR') {
        if (!state.emailValue.includes('@')) {
            return { ...state, emailValue: state.emailValue, emailValid: '이메일 형식을 맞춰주세요.'}
        } else {
            if (state.emailChackValue === '') {
                return {...state, emailValue: state.emailValue, emailValid: 'good'}
            } else if (state.emailValue === state.emailChackValue) {
                return {...state, emailValue: state.emailValue, emailValid: 'good', emailChackValid: 'good'}
            } else {
                return {...state, emailValue: state.emailValue, emailValid: '주소가 일치하지 않습니다.'}
            }
            
        }
    }

    
    if (action.type === 'EMAILCHACK_ERROR') {
        return { ...state, emailChackValue: action.val, emailChackValid: "이메일 형식이 다릅니다." }
    }
    if(action.type === 'EMAILCHACK_INCLUDE') {
        if (action.val === state.emailValue) {
            return {emailChackValue: action.val, emailChackValid: "good", emailValid :"good", emailValue: state.emailValue }
        } else {
            return { ...state, emailChackValue: action.val, emailChackValid: '주소가 일치하지 않습니다.'}
        }
    }
    
    
    if (action.type === "EMAILCHACK_BLUR") {
        if (!state.emailChackValue.includes('@')) {
            return { ...state, emailChackValue: state.emailChackValue, emailChackValid: "이메일 형식이 다릅니다." }
        } else {
            if (state.emailChackValue === state.emailValue) {
                return { ...state, emailChackValue: state.emailChackValue, emailChackValid: "good", emailValid: 'good' }
            } else {
                return { ...state, emailChackValue: state.emailChackValue, emailChackValid: '주소가 일치하지 않습니다.' }
            }
        }
    }
    return {emailValue: '', emailChackValue: '', emailValid: false, emailChackValid: false}
}

export const passwordReducer = (state, action) => {
    if (action.type === 'PASSWORD_INPUT') {
        if (state.passwordChackValue === '') { 
            return {...state, passwordValue: action.val, passwordValid: 'good'}
        } else if (state.passwordChackValue === action.val) {
            return {...state, passwordValue: action.val, passwordValid: 'good', passwordChackValid: 'good'}
        } else {
            return {...state, passwordValue: action.val, passwordValid: '비밀번호가 일치하지 않습니다.'}
        }
    }

    if (action.type === 'PASSWORD_ERROR') {
        return {...state, passwordValue: action.val, passwordValid: '비밀번호는 6자 이상, 20자 이하로 입력해주세요.'}
    }

    if (action.type === 'PASSWORD_BLUR') {
        if (state.passwordValue.trim().length < 6) {
            return {...state, passwordValue: state.passwordValue, passwordValid: '비밀번호는 6자 이상, 20자 이하로 입력해주세요.'}
        } else {
            if (state.passwordChackValue === '') { 
                return {...state, passwordValue: state.passwordValue, passwordValid: 'good'}
            } else if (state.passwordChackValue === state.passwordValue) {
                return {...state, passwordValue: state.passwordValue, passwordValid: 'good', passwordChackValid: 'good'}
            } else {
                return {...state, passwordValue: state.passwordValue, passwordValid: '비밀번호가 일치하지 않습니다.'}
            }
        }
    }

    if (action.type === 'PASSWORDCHACK_INPUT') {
        if (state.passwordValue === action.val) {
            return {...state, passwordChackValue: action.val, passwordValid: 'good', passwordChackValid: 'good'}
        } else {
            return {...state, passwordChackValue: action.val, passwordChackValid: '비밀번호가 일치하지 않습니다.'}
        }
    }

    if (action.type === 'PASSWORDCHACK_ERROR') {
        return {...state, passwordChackValue: action.val, passwordChackValid: '비밀번호는 6자 이상, 20자 이하로 입력해주세요.'}
    }

    if (action.type === 'PASSWORDCHACK_BLUR') {
        if (state.passwordChackValue.trim().length < 6) {
            return {...state, passwordValue: state.passwordValue, passwordValid: '비밀번호는 6자 이상, 20자 이하로 입력해주세요.'}
        } else {
            if (state.passwordValue === state.passwordChackValue) {
                return {...state, passwordValue: state.passwordValue, passwordValid: 'good', passwordChackValid: 'good'}
            } else {
                return {...state, passwordValue: state.passwordValue, passwordValid: '비밀번호가 일치하지 않습니다.'}
            }
        }
    }


    return { passwordValue: '', passwordChackValue: '', passwordValid: null, passwordChackValid: null }
}
