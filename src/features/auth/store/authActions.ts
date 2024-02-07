import { createAsyncThunk } from '@reduxjs/toolkit';

import { login, register } from '@services/api';

interface SignUpInfo {
  name: string;
  email: string;
  password: string;
}
interface LoginInfo {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<
  // Return type of the payload creator
  void,
  SignUpInfo,
  // Types for ThunkAPI
  {
    rejectValue: string;
  }
>('auth/register', async (user, { rejectWithValue }) => {
  try {
    await register(user.name, user.email, user.password);
  } catch (error) {
    console.log(error, 'error1');
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Something went wrong!');
  }
});

export const loginUser = createAsyncThunk<
  void,
  LoginInfo,
  // Types for ThunkAPI
  {
    rejectValue: string;
  }
>('auth/login', async (user, { rejectWithValue }) => {
  try {
    await login(user.email, user.password);
  } catch (error) {
    console.log(error, 'error1');
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Something went wrong!');
  }
});
