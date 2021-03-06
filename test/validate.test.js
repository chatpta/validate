const assert = require( 'assert' ).strict;
const { describe, it } = require( 'mocha' );
const validate = require( '../index' );


describe( 'AuthUtil test', function () {
    const goodString = 'I am a good person';
    const badString = 'I <script>am evil</script>';
    const user = { username: 'username' };

    describe( 'Validate function test', function () {

        it( 'isCharactersString returns true if input is character false otherwise', function ( done ) {
            assert.ok( !validate.isCharactersString(), 'Undefined string test failed' );
            assert.ok( !validate.isCharactersString( 3 ), 'Type of string test failed' );
            assert.ok( !validate.isCharactersString( badString ), 'Bad string test failed' );
            assert.ok( validate.isCharactersString( goodString ), 'Good string test failed' );
            done();
        } );

        it( 'isEmailString returns true if input is email false otherwise ', function ( done ) {
            assert.ok( !validate.isEmailString( goodString ), 'Bad email test failed' );
            assert.ok( !validate.isEmailString( badString ), 'Bad email test failed' );
            assert.ok( !validate.isEmailString( 'peter @gmail.com' ), 'Email validation failed' );
            assert.ok( validate.isEmailString( 'peter@gmail.com' ), 'Email validation failed' );
            done();
        } );

        it( 'isJwtString returns true if input is jwt string false otherwise', function ( done ) {
            const goodJwt = 'eyJhbGciOiJzaGE1MTIiLCJ0eXAiOiJKV1QifQ.eyJ1c2VyX2lkIjoyNjg0LCJ0aW1lIjoxNjEwNzE2ODM0ODc2fQ.9o_7dM4YjjcNseH7Cw3IL_t8yD1hhs1hluTCWG_JzYEExYOp89Gd6k0AbU018x3EQXCrdMUE6KXfL0KNg2Li9g';
            const badJwt = 'eyJhbGciOiJza<scriptE1MTIiLCJ0eXAiOiJKV/1QifQ.eyJ1c2VyX2lkIjoyNjg0LCJ0aW1lIjoxNjEwNzE2ODM0ODc2fQ.9o_7dM4YjjcNseH7Cw3IL_t8yD1hhs1hluTCWG_JzYEExYOp89Gd6k0AbU018x3EQXCrdMUE6KXfL0KNg2Li9g';

            assert.ok( !validate.isJwtString( goodString ), 'Bad email test failed' );
            assert.ok( !validate.isJwtString( badString ), 'Bad email test failed' );
            assert.ok( !validate.isJwtString( badJwt ), 'Bad badJwt string test failed' );
            assert.ok( validate.isJwtString( goodJwt ), 'Good JwtString string test failed' );
            done();
        } );

        it( 'isPasswordString returns true if input is password string false otherwise', function ( done ) {
            assert.ok( !validate.isPasswordString( goodString ), 'Bad password test failed' );
            assert.ok( !validate.isPasswordString( badString ), 'Bad password failed' );
            assert.ok( !validate.isPasswordString( 'ha!lsw 3ol&*ler' ), 'Password validation failed' );
            assert.ok( validate.isPasswordString( 'ha!lsw3ol&*ler' ), 'Password validation failed' );
            done();
        } );

        it( 'isUsernameString returns true if input is username string false otherwise', function ( done ) {
            assert.ok( !validate.isUsernameString( goodString ), 'Good string test failed' );
            assert.ok( !validate.isUsernameString( badString ), 'Bad string test failed' );
            assert.ok( validate.isUsernameString( 'testUsername' ), 'username validation failed' );
            assert.ok( validate.isUsernameString( user.username ), 'username validation failed' );
            done();
        } );
    } );
} );
