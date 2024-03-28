package com.wey.service;

import com.wey.pojo.User;

public interface UserService {

    User checkUser(String username, String password);
}
